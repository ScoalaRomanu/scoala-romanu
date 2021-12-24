import { el, elc, eli, wrap } from "./element-builder.mjs";
import { sidebarFeature } from "./sidebar-feature.mjs";

export const ConfigSidebarPreview = createClass({
  render: function () {
    const entry = this.props.entry;

    return wrap(
      elc(
        "div",
        "preview-sidebar",
        eli(
          "div",
          "sidebar",
          elc(
            "div",
            "inner",
            menu(entry),
            features(entry),
            contact(this.props),
            copyright(this.props)
          )
        )
      )
    );
  },
});

function menu(entry) {
  return eli(
    "nav",
    "menu",
    elc("header", "major", el("h2", entry.getIn(["data", "menuHeader"]))),
    el(
      "ul",
      el(
        "li",
        h("a", { href: "/", target: "_blank" }, entry.getIn(["data", "homeMenuItemText"]))
      ),
      el(
        "li",
        elc("span", "opener active", "Exemplu"),
        el("ul", el("li", el("span", "Exemplu")))
      ),
      el("li", el("span", "Exemplu"))
    )
  );
}

function features(entry) {
  return el(
    "section",
    elc("header", "major", el("h2", entry.getIn(["data", "featuresTitle"]))),
    sidebarFeature(
      "javascript:;",
      "https://via.placeholder.com/200x100?text=Exemplu+imagine",
      "",
      "Ipsum cillum minim dolore voluptate cupidatat amet et consectetur dolore irure mollit."
    )
  );
}

function contact(props) {
  const widgets = props.widgetsFor("contact");
  const email = widgets.getIn(["data", "email"]);
  const phone = widgets.getIn(["data", "phone"]);
  const address = widgets.getIn(["data", "address"]);
  return el(
    "section",
    elc("header", "major", el("h2", widgets.getIn(["data", "header"]))),
    el("p", widgets.getIn(["widgets", "description"])),
    elc(
      "ul",
      "contact",
      email &&
        elc("li", "icon solid fa-envelope", h("a", { href: `mailto:${email}` }, email)),
      phone && elc("li", "icon solid fa-phone", h("a", { href: `tel:${phone}` }, phone)),
      address && elc("li", "icon solid fa-home", address)
    )
  );
}

function copyright(props) {
  return eli("footer", "footer", elc("p", "copyright", props.widgetFor("copyright")));
}
