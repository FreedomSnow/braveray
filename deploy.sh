#!/bin/bash

# 错误时退出
set -e

# 构建
npm run build

# 进入dist目录
cd dist

# 初始化新的Git仓库
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# 推送到gh-pages分支
git push -f https://github.com/FreedomSnow/braveray.git master:gh-pages

cd -
