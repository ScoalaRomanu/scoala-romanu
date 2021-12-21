module.exports = [
  [
    "sortMenuItems",
    (menuItems) => {
      return [...(menuItems ?? [])].sort((a, b) =>
        Math.sign(a.data.menuOrder - b.data.menuOrder)
      );
    },
  ],
  [
    "featuredPages",
    (pages) => {
      return [...(pages ?? [])].filter((page) => !!page.data.isFeatured);
    },
  ],
];
