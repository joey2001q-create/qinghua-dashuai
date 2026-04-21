# 宝塔面板部署指南

## 服务器信息
- 系统：Ubuntu
- 配置：4核4G（可用2G）
- 面板：宝塔
- 访问方式：IP地址（无域名）

---

## 第一步：安装 Node.js（宝塔面板）

### 方法一：通过宝塔软件商店安装
1. 登录宝塔面板
2. 点击左侧菜单 **软件商店**
3. 搜索 **PM2管理器**
4. 点击 **安装**
5. 安装时会自动安装 Node.js

### 方法二：命令行安装（推荐）
```bash
# SSH 连接服务器后执行
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y nodejs

# 验证安装
node -v    # 应显示 v20.x.x
npm -v     # 应显示 10.x.x

# 安装 PM2
sudo npm install -g pm2
```

---

## 第二步：上传代码

### 方法一：Git 拉取（推荐）
```bash
# 创建目录
sudo mkdir -p /www/wwwroot/qinghua-dashuai
cd /www/wwwroot/qinghua-dashuai

# 克隆代码
git clone https://gitee.com/Y1zsda23/dev_dashuai.git .

# 安装依赖
npm install

# 构建
npm run build
```

### 方法二：宝塔文件管理器上传
1. 宝塔面板 → 文件
2. 进入 `/www/wwwroot/`
3. 创建文件夹 `qinghua-dashuai`
4. 上传项目压缩包并解压

---

## 第三步：启动应用

```bash
cd /www/wwwroot/qinghua-dashuai

# 复制 PM2 配置
cp ecosystem.config.js .

# 启动应用
pm2 start ecosystem.config.js

# 保存 PM2 进程列表
pm2 save

# 设置开机自启
pm2 startup
```

验证：
```bash
pm2 status
# 应该看到 qinghua-dashuai 状态为 online
```

---

## 第四步：宝塔配置 Nginx 反向代理

### 1. 添加站点
1. 宝塔面板 → 网站
2. 点击 **添加站点**
3. 域名填写：`你的服务器IP`（如 `123.45.67.89`）
4. PHP版本选择：纯静态
5. 点击提交

### 2. 配置反向代理
1. 点击刚创建的站点 → **设置**
2. 点击左侧 **反向代理**
3. 点击 **添加反向代理**
4. 填写：
   - 代理名称：`qinghua`
   - 目标URL：`http://127.0.0.1:3000`
   - 发送域名：`$host`
5. 点击提交

### 3. 或手动修改 Nginx 配置
点击站点 → 设置 → 配置文件，在 `server {}` 内添加：

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
    proxy_read_timeout 300s;
    proxy_connect_timeout 75s;
}

# 静态资源缓存
location /_next/static {
    proxy_pass http://127.0.0.1:3000;
    proxy_cache_valid 200 365d;
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

保存后点击 **重载配置**。

---

## 第五步：开放端口

### 宝塔面板
1. 安全 → 防火墙
2. 确保 **80** 端口已开放

### 云服务器控制台
如果使用阿里云/腾讯云等，需要在安全组开放 80 端口。

---

## 第六步：验证访问

浏览器访问：`http://你的服务器IP`

应该能看到清华大帅AI首页。

---

## 常用运维命令

```bash
# 查看应用状态
pm2 status

# 查看日志
pm2 logs qinghua-dashuai

# 重启应用
pm2 restart qinghua-dashuai

# 停止应用
pm2 stop qinghua-dashuai

# 更新代码
cd /www/wwwroot/qinghua-dashuai
git pull
npm install
npm run build
pm2 restart qinghua-dashuai
```

---

## 性能优化建议

由于可用内存只有 2G，建议：

### 1. 修改 PM2 配置
编辑 `ecosystem.config.js`：
```javascript
{
  instances: 1,           // 改为 1 个实例
  max_memory_restart: '300M'  // 降低内存限制
}
```

### 2. 添加 Swap（如果内存不足）
```bash
# 创建 2G swap
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 3. 开启 Nginx Gzip
宝塔面板 → 软件商店 → Nginx → 设置 → 配置修改，在 http {} 内添加：
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1000;
```

---

## 故障排查

### 访问显示 502
1. 检查 PM2 是否运行：`pm2 status`
2. 检查端口：`netstat -tlnp | grep 3000`
3. 查看日志：`pm2 logs qinghua-dashuai`

### 内存不足
```bash
# 查看内存使用
free -h

# 重启应用释放内存
pm2 restart qinghua-dashuai
```

### 构建失败
```bash
# 清除缓存重试
rm -rf node_modules .next
npm install
npm run build
```

### Node.js 版本不兼容
错误信息：`For Next.js, Node.js version ">=20.9.0" is required`

解决方案：
```bash
# 方法一：使用 n 模块升级
npm install -g n
n 20
hash -r
node -v

# 方法二：宝塔面板升级
软件商店 → 搜索 Node.js → 卸载旧版本 → 安装 Node.js 20.x

# 升级后需要删除并重建 PM2 进程
pm2 delete qinghua-dashuai
pm2 start npm --name "qinghua-dashuai" -- start
pm2 save
```

### Windows 上传后构建失败（原生依赖缺失）
错误信息：`Cannot find module '@tailwindcss/oxide-linux-x64-gnu'`

原因：Windows 上安装的 node_modules 缺少 Linux 原生依赖

解决方案：
```bash
cd /www/wwwroot/qinghua-dashuai
rm -rf node_modules package-lock.json
npm install
npm run build
pm2 restart qinghua-dashuai
```

### npm install 速度慢
```bash
# 配置国内镜像
npm config set registry https://registry.npmmirror.com

# 安装完成后可恢复
npm config set registry https://registry.npmjs.org
```
