{
  "apps": [
    {
      "name": "qinghua-dashuai",
      "script": "node_modules/next/dist/bin/next",
      "args": "start",
      "cwd": "/www/wwwroot/qinghua-dashuai",
      "instances": 1,
      "exec_mode": "fork",
      "autorestart": true,
      "watch": false,
      "max_memory_restart": "300M",
      "env": {
        "NODE_ENV": "production",
        "PORT": 3000
      },
      "error_file": "/var/log/pm2/qinghua-dashuai-error.log",
      "out_file": "/var/log/pm2/qinghua-dashuai-out.log",
      "log_date_format": "YYYY-MM-DD HH:mm:ss Z"
    }
  ]
}
