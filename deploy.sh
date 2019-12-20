#!usr/bin/env sh
echo "000"
#确保脚本跑出遇到的错误
set -e

echo "00"
#安装依赖
cnpm install

echo "11"

#生成静态文件
npm run docs:build
echo "22"

#进入生成 的文件夹
cd .vuepress/dist
echo "33"

#如果是发布到自定义域名
#echo 'www.examplt.com' > CNAME

git init
git add -A
git commit -m 'deploy'
echo "44"

#如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:limengmengops/review-notes.github.io.git master

echo "55"

#如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:limengmengops/review-notes.git master:gh-pages

cd -

echo "66"