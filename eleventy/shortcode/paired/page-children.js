const { renderString } = require("nunjucks");

module.exports = [
  [
    "pagechildren",
    (content, pages, key) => {
      const children = pages.filter(
        (page) => page.data?.eleventyNavigation?.parent === key
      );
      return children
        .map((child) => renderString(content, { child: child?.template?.dataCache }))
        .join("\n");
    },
  ],
];
