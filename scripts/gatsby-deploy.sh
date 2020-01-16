git pull
git checkout master
npm run clean && npm run build:pp
git add .
git commit -m "CircleCI Build and Deploy"
git push