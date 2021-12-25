module.exports = [
  [
    "breadcrumbs",
    (name, parent, allPages) => {
      const path = [name];

      while (parent) {
        const page = allPages.find(
          (page) => page?.data?.eleventyNavigation?.key === parent
        );
        if (page) {
          path.push(`<a href="${page.url}">${page.data?.title}</a>`);
        }
        parent = page?.data?.eleventyNavigation?.parent;
      }

      path.push(`<a href="/"><i class="fas fa-home"></i></a>`);

      return path
        .reverse()
        .join(`<i class="fas fa-chevron-right" style="padding: 0 0.5rem;"></i>`);
    },
  ],
];
