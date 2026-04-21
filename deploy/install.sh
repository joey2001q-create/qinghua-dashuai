#!/bin/bash

# ============================================
# 清华大帅AI - 国内服务器一键部署脚本
# 适用于：Ubuntu 20.04+ / CentOS 7+
# ============================================

set -e

echo "🚀 开始部署清华大帅AI..."

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 配置变量
APP_NAME="qinghua-dashuai"
APP_DIR="/var/www/$APP_NAME"
GIT_REPO="https://github.com/YOUR_USERNAME/qinghua-dashuai.git"  # 替换为您的仓库地址
NODE_VERSION="20"

# 检测系统类型
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
else
    echo -e "${RED}无法检测系统类型${NC}"
    exit 1
fi

echo -e "${GREEN}检测到系统: $OS${NC}"

# 1. 安装依赖
install_dependencies() {
    echo -e "${YELLOW}正在安装依赖...${NC}"
    
    if [ "$OS" = "ubuntu" ] || [ "$OS" = "debian" ]; then
        apt update
        apt install -y curl git nginx
        
        # 安装 Node.js
        curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash -
        apt install -y nodejs
        
    elif [ "$OS" = "centos" ] || [ "$OS" = "rhel" ]; then
        yum install -y curl git nginx
        
        # 安装 Node.js
        curl -fsSL https://rpm.nodesource.com/setup_$NODE_VERSION.x | bash -
        yum install -y nodejs
    fi
    
    # 安装 PM2
    npm install -g pm2
    
    echo -e "${GREEN}依赖安装完成${NC}"
}

# 2. 创建目录和克隆代码
setup_app() {
    echo -e "${YELLOW}正在设置应用目录...${NC}"
    
    mkdir -p $APP_DIR
    mkdir -p /var/log/pm2
    
    if [ -d "$APP_DIR/.git" ]; then
        cd $APP_DIR
        git pull
    else
        git clone $GIT_REPO $APP_DIR
        cd $APP_DIR
    fi
    
    echo -e "${GREEN}代码更新完成${NC}"
}

# 3. 安装依赖和构建
build_app() {
    echo -e "${YELLOW}正在安装依赖和构建...${NC}"
    
    cd $APP_DIR
    npm install
    npm run build
    
    echo -e "${GREEN}构建完成${NC}"
}

# 4. 配置 PM2
setup_pm2() {
    echo -e "${YELLOW}正在配置 PM2...${NC}"
    
    cd $APP_DIR
    pm2 delete $APP_NAME 2>/dev/null || true
    pm2 start ecosystem.config.js
    pm2 save
    pm2 startup
    
    echo -e "${GREEN}PM2 配置完成${NC}"
}

# 5. 配置 Nginx
setup_nginx() {
    echo -e "${YELLOW}正在配置 Nginx...${NC}"
    
    cp deploy/nginx.conf /etc/nginx/sites-available/$APP_NAME
    ln -sf /etc/nginx/sites-available/$APP_NAME /etc/nginx/sites-enabled/
    
    # 删除默认配置
    rm -f /etc/nginx/sites-enabled/default
    
    # 测试并重启 Nginx
    nginx -t
    systemctl restart nginx
    systemctl enable nginx
    
    echo -e "${GREEN}Nginx 配置完成${NC}"
}

# 6. 配置防火墙
setup_firewall() {
    echo -e "${YELLOW}正在配置防火墙...${NC}"
    
    if command -v ufw &> /dev/null; then
        ufw allow 80
        ufw allow 443
        ufw allow 22
        ufw --force enable
    elif command -v firewall-cmd &> /dev/null; then
        firewall-cmd --permanent --add-service=http
        firewall-cmd --permanent --add-service=https
        firewall-cmd --permanent --add-service=ssh
        firewall-cmd --reload
    fi
    
    echo -e "${GREEN}防火墙配置完成${NC}"
}

# 主流程
main() {
    install_dependencies
    setup_app
    build_app
    setup_pm2
    setup_nginx
    setup_firewall
    
    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}✅ 部署完成！${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo "访问地址: http://您的服务器IP"
    echo ""
    echo "常用命令:"
    echo "  查看日志: pm2 logs $APP_NAME"
    echo "  重启应用: pm2 restart $APP_NAME"
    echo "  更新代码: cd $APP_DIR && git pull && npm run build && pm2 restart $APP_NAME"
    echo ""
}

main
