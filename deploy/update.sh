#!/bin/bash

# ============================================
# 清华大帅AI - 自动更新脚本
# ============================================

set -e

APP_NAME="qinghua-dashuai"
APP_DIR="/var/www/$APP_NAME"

echo "🔄 开始更新 $APP_NAME..."

cd $APP_DIR

echo "📥 拉取最新代码..."
git pull

echo "📦 安装依赖..."
npm install

echo "🔨 构建应用..."
npm run build

echo "🔄 重启应用..."
pm2 restart $APP_NAME

echo "✅ 更新完成！"
pm2 logs $APP_NAME --lines 20
