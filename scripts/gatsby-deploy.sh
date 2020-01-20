git pull
git checkout master
npm run clean && npm run build:pp
npm run gh
git checkout gh-pages
git add .
git commit -m "CircleCI Build and Deploy"
git push