const { DateTime } = require("luxon");

module.exports = (config) => {
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./src/uploads");
  config.addPassthroughCopy("./src/assets/js");
  config.addPassthroughCopy("./src/assets/css/main.min.css");
  config.addPassthroughCopy("./src/admin");

  config.addFilter("formatDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString({ locale: process.env.LOCALE });
  });
  config.addFilter("formatDateTime", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_SHORT, {
      locale: process.env.LOCALE,
    });
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
