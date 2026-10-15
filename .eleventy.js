const { DateTime } = require("luxon");

const LINKS = {
  git: { icon: "fa-brands fa-github", label: "GitHub repository" },
  appleStore: { icon: "fa-brands fa-app-store-ios", label: "App Store" },
  googlePlay: { icon: "fa-brands fa-google-play", label: "Google Play" },
  self: { icon: "fa-solid fa-arrow-up-right-from-square", label: "Live site" },
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("resume");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addFilter("niceDate", (date) =>
    DateTime.fromISO(date).toFormat("LLL yyyy")
  );

  eleventyConfig.addFilter("duration", (start, end) => {
    const diff = (end ? DateTime.fromISO(end) : DateTime.now())
      .diff(DateTime.fromISO(start), ["years", "months"])
      .toObject();
    const years = Math.floor(diff.years);
    const months = Math.max(1, Math.round(diff.months));
    const parts = [];
    if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (months && months < 12) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
    return parts.join(" ");
  });

  eleventyConfig.addFilter("yearOf", (date) => DateTime.fromISO(date).year);

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  eleventyConfig.addShortcode("projectLink", (title, key, url) => {
    const link = LINKS[key] || LINKS.self;
    const isExternal = url.startsWith("http");
    return `<a class="icon-link" href="${url}" ${isExternal ? 'target="_blank" rel="noopener"' : ""} aria-label="${title} – ${link.label}" title="${link.label}"><i class="${link.icon}" aria-hidden="true"></i></a>`;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
