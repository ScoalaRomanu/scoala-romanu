import { el, elc, wrap } from "./element-builder.mjs";

export const homeFeature = (iconClass, title, content) =>
  elc(
    "div",
    "features",
    el(
      "article",
      elc("span", `icon solid ${iconClass}`),
      elc("div", "content", el("h3", title), el("p", content))
    )
  );

export const HomeFeaturePreview = createClass({
  render: function () {
    const entry = this.props.entry;

    const iconClass = `${entry.getIn(["data", "icon"])}`;
    return wrap(
      homeFeature(iconClass, entry.getIn(["data", "title"]), this.props.widgetFor("body"))
    );
  },
});
