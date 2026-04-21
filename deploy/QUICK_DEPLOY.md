# 清华大帅AI - 快速部署步骤

## 服务器信息
- IP：193.112.110.145
- 宝塔面板：http://193.112.110.145:8228/
- 系统：Ubuntu
- 可用内存：2G

---

## 第一步：安装 Node.js（SSH连接服务器）

```bash
# 1. 安装 Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y nodejs

# 2. 验证
node -v

# 3. 安装 PM2
sudo npm install -g pm2

# 4. 创建日志目录
sudo mkdir -p /var/log/pm2
```

---

## 第二步：下载代码

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

---

## 第三步：启动应用

```bash
cd /www/wwwroot/qinghua-dashuai

# 启动
pm2 start ecosystem.config.js

# 保存并设置开机自启
pm2 save
pm2 startup
```

验证启动成功：
```bash
pm2 status
```

---

## 第四步：宝塔面板配置 Nginx

### 在宝塔面板操作：

1. **添加站点**
   - 网站 → 添加站点
   - 域名填：`193.112.110.145`
   - PHP版本：纯静态
   - 提交

2. **配置反向代理**
   - 点击站点 → 设置 → 反向代理 → 添加反向代理
   - 代理名称：`qinghua`
   - 目标URL：`http://127.0.0.1:3000`
   - 发送域名：`$host`
   - 提交

---

## 第五步：访问测试

浏览器打开：http://193.112.110.145

---

## 一键部署命令（复制粘贴执行）

```bash
# 安装 Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y nodejs
sudo npm install -g pm2
sudo mkdir -p /var/log/pm2

# 下载代码
sudo mkdir -p /www/wwwroot/qinghua-dashuai
cd /www/wwwroot/qinghua-dashuai
git clone https://gitee.com/Y1zsda23/dev_dashuai.git .
npm install
npm run build

# 启动
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## 更新代码

```bash
cd /www/wwwroot/qinghua-dashuai
git pull
npm install
npm run build
pm2 restart qinghua-dashuai
```

---

## 常用命令

```bash
pm2 status              # 查看状态
pm2 logs qinghua-dashuai  # 查看日志
pm2 restart qinghua-dashuai  # 重启
pm2 stop qinghua-dashuai  # 停止
```
