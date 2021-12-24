import { el, eli, elc, wrap } from "./element-builder.mjs";

export const featuredPages = (header, ...pages) => {
  return el(
    "section",
    elc("header", "major", el("h2", header)),
    elc("div", "posts", pages)
  );
};

export const featuredPage = (header, image, imageAlt, description, buttonText) =>
  el(
    "article",
    image &&
      h(
        "a",
        { href: "javascript:;", className: "image", target: "_blank" },
        h("img", { src: image, alt: imageAlt })
      ),
    el("h3", header),
    el("p", description),
    elc(
      "ul",
      "actions",
      el(
        "li",
        h(
          "a",
          { href: "javascript:;", className: "button", target: "_blank" },
          buttonText
        )
      )
    )
  );

export const PagePreview = createClass({
  render: function () {
    const entry = this.props.entry;
    return wrap(
      page(entry, this.props),
      asFeatured(entry, this.props),
      menu(entry, this.props)
    );
  },
});

function page(entry, props) {
  return el(
    "section",
    elc(
      "header",
      "main",
      el("h1", entry.getIn(["data", "title"])),
      elc("span", "image main"),
      props.widgetFor("body")
    )
  );
}

function asFeatured(entry, props) {
  const featured = props.widgetsFor("featured");
  if (!featured.getIn(["data", "isFeatured"])) return "";
  const featuredImageUrl = featured.getIn(["data", "image"]);
  const featuredImage = featuredImageUrl
    ? props.getAsset(featuredImageUrl).toString()
    : null;

  return el(
    "div",
    h("hr"),
    el("h2", el("i", "Ca si featured:")),
    featuredPages(
      "Featured",
      featuredPage(
        entry.getIn(["data", "title"]),
        featuredImage,
        featured.getIn(["data", "imageAlt"]),
        featured.getIn(["data", "excerpt"]),
        "..."
      )
    )
  );
}

function menu(entry, props) {
  const navigation = props.widgetsFor("eleventyNavigation");
  const key = navigation.getIn(["data", "key"]);
  const parent = navigation.getIn(["data", "parent"]);
  const title = navigation.getIn(["data", "title"]);
  const url = navigation.getIn(["data", "url"]);

  const item = el(
    "li",
    h("a", { href: url ?? "javascript:;", target: "_blank" }, title ?? key)
  );

  return el(
    "div",
    h("hr"),
    el("h2", el("i", "In meniu:")),
    eli(
      "nav",
      "menu",
      el(
        "ul",
        parent ? el("li", elc("span", "opener active", parent), el("ul", item)) : item
      )
    )
  );
}
