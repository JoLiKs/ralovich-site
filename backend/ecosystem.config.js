module.exports = {
  apps: [
    {
      name: "backend",
      script: "./start.sh",
      cwd: __dirname,
      interpreter: "bash",
      env: {
        HOST: "127.0.0.1",
        PORT: "8000",
        WORKERS: "1",
      },
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,
    },
  ],
};
