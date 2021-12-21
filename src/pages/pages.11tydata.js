module.exports = {
  eleventyComputed: {
    permalink: (data) => (data.permalink === true ? undefined : data.permalink),
  },
};
