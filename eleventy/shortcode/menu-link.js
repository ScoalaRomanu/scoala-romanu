module.exports = [
  [
    "menuLink",
    (page, allPages) => {
      const template = allPages.find((p) => p.url === page.url);
      if (template?.templateContent?.trim()) {
        return `<a class="opener" href="${page.url}">${page.title}</a>`;
      }
      return `<span class="opener">${page.title}</span>`;
    },
  ],
];
