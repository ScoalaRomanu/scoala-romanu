import { el, elc, eli, wrap } from "./element-builder.mjs";
import { homeFeature } from "./home-feature.mjs";
import { featuredPages, featuredPage } from "./page.mjs";

export const ConfigHomePreview = createClass({
  render: function () {
    const entry = this.props.entry;
    return wrap(
      hero(entry, this.props),
      features(entry),
      featuredPages(
        entry.getIn(["data", "featuredPagesHeader"]),
        featuredPage(
          "Exemplu pagina",
          "https://via.placeholder.com/200x100?text=Exemplu+imagine",
          "",
          "Velit reprehenderit est veniam aliquip velit occaecat velit duis deserunt pariatur occaecat labore ea sit.",
          entry.getIn(["data", "featuredButtonText"])
        )
      )
    );
  },
});

function hero(entry, props) {
  const heroLink = entry.getIn(["data", "heroLink"]);
  const heroImage = props.getAsset(entry.getIn(["data", "heroImage"])).toString();

  return eli(
    "section",
    "banner",
    elc(
      "div",
      "content",
      el(
        "header",
        el("h1", entry.getIn(["data", "heroHeader"])),
        el("p", entry.getIn(["data", "heroHeaderCaption"]))
      ),
      el("p", entry.getIn(["data", "heroDescription"])),
      heroLink &&
        elc(
          "ul",
          "actions",
          el(
            "li",
            h(
              "a",
              { href: heroLink, className: "button big", target: "_blank" },
              entry.getIn(["data", "heroLinkText"])
            )
          )
        )
    ),
    elc(
      "span",
      "image object",
      h("img", {
        src: heroImage,
        alt: entry.getIn(["data", "heroImageAlt"]),
      })
    )
  );
}

function features(entry) {
  return el(
    "section",
    elc("header", "major", el("h2", entry.getIn(["data", "featuresHeader"]))),
    homeFeature("fa-bolt", "Exemplu", "Occaecat aliqua enim quis nulla sint sunt dolor.")
  );
}
