import { el, elc, wrap } from "./element-builder.mjs";

export const sidebarFeature = (url, image, imageAlt, content) =>
  elc(
    "div",
    "mini-posts",
    el(
      "article",
      h(
        "a",
        {
          href: url,
          target: "_blank",
          className: "image",
        },
        h("img", { src: image, alt: imageAlt })
      ),
      el("p", content)
    )
  );

export const SidebarFeaturePreview = createClass({
  render: function () {
    const entry = this.props.entry;
    const image = this.props.getAsset(entry.getIn(["data", "image"])).toString();
    return wrap(
      elc(
        "div",
        "preview-sidebar",
        sidebarFeature(
          entry.getIn(["data", "url"]),
          image,
          entry.getIn(["data", "imageAlt"]),
          this.props.widgetFor("body")
        )
      )
    );
  },
});
