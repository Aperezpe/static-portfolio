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

  return {
    passThroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
    }
  }
}