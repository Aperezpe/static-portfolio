const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("resume");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("index.js");

  eleventyConfig.addNunjucksFilter('niceDate', (dateObj) => {
    return DateTime.fromJSDate(new Date(dateObj)).toFormat("LLL yyyy");
  });

  eleventyConfig.addNunjucksGlobal('notewortyProjectsLength', (notewortyProjects) => {
    return notewortyProjects.filter(notewortyProject => !notewortyProject.featuredProject).length;
  });

  // It generates a git, appleStore, googlePlay, or normal link
  // className = name of class that <a> tag will have
  eleventyConfig.addNunjucksShortcode("generateLink", function(projectTitle , linkKey, linkUrl, showSelfLink) {

    let linkElement = '';
    if (linkKey === "git") {
      linkElement =  `
      <a class="project__link" target="_blank" rel="noopener" title="${projectTitle} Repo" href="${linkUrl}" >
        <i class="fa-brands fa-github hoverable-icon"></i>
      </a>`;
    } else if (linkKey === "appleStore") {
      linkElement =  `
      <a class="project__link" target="_blank" rel="noopener" title="${projectTitle} Apple Store" href="${linkUrl}" >
        <i class="fa-brands fa-app-store-ios hoverable-icon noteworthy-project__right-icon"></i>
      </a>`;
    } else if (linkKey === "googlePlay") {
      linkElement =  `
      <a class="project__link" target="_blank" rel="noopener" title="${projectTitle} Google Play" href="${linkUrl}" >
        <i class="fa-brands fa-google-play hoverable-icon noteworthy-project__right-icon"></i>
      </a>`;
    } else {

      linkElement = showSelfLink == null || showSelfLink == true ? `
        <a class="project__link" target="_blank" rel="noopener" title="${projectTitle}" href="${linkUrl}" >
          <i class="fa-solid fa-arrow-up-right-from-square hoverable-icon noteworthy-project__right-icon"></i>
        </a>` : ``;
    }

    return linkElement;

  });

  return {
    passThroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    }
  }
}