module.exports = [
  [
    "featuredPages",
    (pages) => {
      return [...(pages ?? [])].filter((page) => !!page.data.featured?.isFeatured);
    },
  ],
  [
    "shownInMenu",
    (pages) => {
      return [...(pages ?? [])].filter(
        (page) => !!page.data.eleventyNavigation.showInMenu
      );
    },
  ],
];
