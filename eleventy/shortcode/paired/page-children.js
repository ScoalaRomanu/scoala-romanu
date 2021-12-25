const { renderString } = require("nunjucks");

module.exports = [
  [
    "pagechildren",
    (content, pages, key) => {
      if (!key) return;
      const children = pages.filter(
        (page) => page.data?.eleventyNavigation?.parent === key
      );
      return children
        .sort((a, b) =>
          Math.sign(a.data?.eleventyNavigation?.order - b.data?.eleventyNavigation?.order)
        )
        .map((child) => renderString(content, { child: child?.template?.dataCache }))
        .join("\n");
    },
  ],
];
