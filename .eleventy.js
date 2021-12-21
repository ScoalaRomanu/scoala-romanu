const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { passthrough } = require("./eleventy/passthrough");
const dateFilters = require("./eleventy/filter/date");
const pageFilters = require("./eleventy/filter/pages");
const nodeEnvShortcodes = require("./eleventy/shortcode/nodeEnv");

module.exports = (config) => {
  passthrough.forEach((pt) => config.addPassthroughCopy(pt));
  [...dateFilters, ...pageFilters].forEach(([name, fn]) => config.addFilter(name, fn));
  [...nodeEnvShortcodes].forEach(([name, fn]) => config.addShortcode(name, fn));
  config.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
