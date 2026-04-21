{
  "apps": [
    {
      "name": "qinghua-dashuai",
      "script": "node_modules/next/dist/bin/next",
      "args": "start",
      "cwd": "/var/www/qinghua-dashuai",
      "instances": 2,
      "exec_mode": "cluster",
      "autorestart": true,
      "watch": false,
      "max_memory_restart": "500M",
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
