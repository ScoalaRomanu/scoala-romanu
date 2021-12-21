const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { passthrough } = require("./eleventy/passthrough");
const dateFilters = require("./eleventy/filter/date");
const pageFilters = require("./eleventy/filter/pages");
const nodeEnv = require("./eleventy/shortcode/nodeEnv");
const fileViewer = require("./eleventy/shortcode/fileViewer");
const markdownPaired = require("./eleventy/shortcode/paired/markdown");

module.exports = (config) => {
  passthrough.forEach((pt) => config.addPassthroughCopy(pt));
  [...dateFilters, ...pageFilters].forEach(([name, fn]) => config.addFilter(name, fn));
  [...nodeEnv, ...fileViewer].forEach(([name, fn]) => config.addShortcode(name, fn));
  [...markdownPaired].forEach(([name, fn]) => config.addPairedShortcode(name, fn));
  config.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
