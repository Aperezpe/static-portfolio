# Personal Portfolio (In Progress)

This is a static site portfolio developed using only html, css, and javascript. The porfolio is still in development.

## Deployed portfolio
You can look at the deployed site at:\
https://static-portfolio-abperez.herokuapp.com/

## Run project

1. `npm i`
2. `npm run compile:sass`
3. Run `home.html` in live server

## Deploy to heroku server

1. Push all changes to github repo
2. Login to Heroku 
```console
$ heroku login
```
3. Connect the local git repo to the Heroku app:
```console
$ heroku git:remote -a static-portfolio-abperez
```
4. Push changes to heroku app. 
> note: **If changes have already been pushed to git repo, just execute git push heroku main `git push heroku main`**

```console
$ git add . 
$ git commit -m "your commit message" 
$ git push heroku main
```

Reference: https://www.geeksforgeeks.org/how-to-deploy-a-basic-static-html-website-to-heroku/

## Update portfolio data

### Resume
Update resume and place in resume/AbrahamPerez.pdf, and it should automatically get it

### Intro text
Update json file field: introText.

### About me
Update corresponding json fields

### Experience
Update the experience object json file