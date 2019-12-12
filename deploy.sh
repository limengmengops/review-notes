#!usr/bin/env sh

#确保脚本跑出遇到的错误
set -e

#安装依赖
npm install

#生成静态文件
npm run docs:build

#进入生成 的文件夹
cd docs/.vuepress/dist

#如果是发布到自定义域名
#echo 'www.examplt.com' > CNAME

git init
git add -A
git commit -m 'deploy'

#如果发布到 https://<USERNAME>.github.io
#git push -f git@github.com:<USERNAME>/<USERNAME>.githib.io.git master

#如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -