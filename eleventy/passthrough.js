module.exports.passthrough = [
  "src/admin",
  "uploads",
  "src/assets/js/breakpoints.min.js",
  "src/assets/js/browser.min.js",
  "src/assets/js/main.min.js",
  "src/assets/js/util.min.js",
  "src/assets/css/main.min.css",
  "src/assets/css/main.css.map",

  ...(process.env.NODE_ENV === "development"
    ? ["src/assets/js/main.js", "src/assets/js/util.js", "src/assets/css/main.css"]
    : []),
];
