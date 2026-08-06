#!/usr/bin/env python3
"""Build and upload frontend to FTPS. Credentials from env or ~/.ralovich-ftp.env"""
import ftplib
import os
import ssl
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REMOTE_BASE = '/ralovich.com/site_builder'
ENV_FILE = Path.home() / '.ralovich-ftp.env'


def load_creds():
    if ENV_FILE.exists():
        creds = {}
        for line in ENV_FILE.read_text().splitlines():
            line = line.strip()
            if not line or line.startswith('#') or '=' not in line:
                continue
            k, v = line.split('=', 1)
            creds[k.strip()] = v.strip()
        return creds.get('FTP_HOST', '178.124.141.132'), creds['FTP_USER'], creds['FTP_PASS']
    return (
        os.environ.get('FTP_HOST', '178.124.141.132'),
        os.environ['FTP_USER'],
        os.environ['FTP_PASS'],
    )


def connect_ftp(host, user, password):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    ftp = ftplib.FTP_TLS(context=ctx)
    ftp.connect(host, 21, timeout=30)
    ftp.login(user, password)
    ftp.prot_p()
    return ftp


def ensure_remote_dir(ftp, remote_dir):
    parts = [p for p in remote_dir.split('/') if p]
    path = ''
    for part in parts:
        path += '/' + part
        try:
            ftp.cwd(path)
        except ftplib.error_perm:
            ftp.mkd(path)
            ftp.cwd(path)


def upload_file(ftp, local_path: Path, remote_path: str):
    ensure_remote_dir(ftp, os.path.dirname(remote_path))
    with local_path.open('rb') as f:
        ftp.storbinary(f'STOR {remote_path}', f)
    print(f'  uploaded {remote_path}')


def upload_tree(ftp, local_dir: Path, remote_dir: str):
    for item in sorted(local_dir.rglob('*')):
        if item.is_file():
            rel = item.relative_to(local_dir).as_posix()
            upload_file(ftp, item, f'{remote_dir}/{rel}')


def main():
    host, user, password = load_creds()

    print('Building...')
    subprocess.run(['npm', 'run', 'build'], cwd=ROOT, check=True)

    build_dir = ROOT / 'build'
    if not build_dir.exists():
        print('Build directory missing', file=sys.stderr)
        sys.exit(1)

    print(f'Connecting to {host}...')
    ftp = connect_ftp(host, user, password)

    static_local = build_dir / 'static'
    if static_local.exists():
        upload_tree(ftp, static_local, f'{REMOTE_BASE}/static')

    for name in ['index.html', 'favicon.ico', 'logo192.png', 'logo512.png', 'manifest.json', 'robots.txt']:
        local = build_dir / name
        if local.exists():
            upload_file(ftp, local, f'{REMOTE_BASE}/{name}')

    ftp.quit()
    print('Deploy complete.')


if __name__ == '__main__':
    main()
