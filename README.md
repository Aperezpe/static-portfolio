# Personal Portfolio (In Progress)

This is a static site portfolio developed using only html, css, and javascript. The porfolio is still in development.

## Deployed portfolio
This project is hosted by Netlify, but the sice can be accessed by the following URL:
https://portfolio.abperez.com/

## Run project
In Project directory:
1. Install dependencies
```
npm i
```
2. Run sass preprocessor if you're doing sass changes
```
npm run compile:sass 
```
3. Run eleventy server
```
npx @11ty/eleventy --serve
```
4. Do any changes in the project and it should hot reload automatically and reflect changes

## Update portfolio data

### Resume
This is updated on Google Drive, just right click on resume and go to Manage versions. There you can upload new version. This way, the resume link will never change.
Look [here](https://sao.hsu.edu.hk/faq/how-to-update-files-in-google-drive-without-changing-the-shared-link/) for a more detailed tutorial 

### Data
To update any other data on portfolio, just update the portfolioData.json file inside the _data directory.