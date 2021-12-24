import { el, elc, eli, wrap } from "./element-builder.mjs";

export const ConfigSocialPreview = createClass({
  render: function () {
    const entry = this.props.entry;
    const headerMain = this.props.widgetsFor("header").getIn(["data", "main"]);
    const headerSub = this.props.widgetsFor("header").getIn(["data", "sub"]);
    return wrap(
      eli(
        "header",
        "header",
        h(
          "a",
          { href: "/", target: "_blank", className: "logo" },
          h("strong", null, headerMain),
          " ",
          headerSub
        ),

        elc(
          "ul",
          "icons",
          el(
            "li",
            h(
              "a",
              {
                href: entry.getIn(["data", "facebook"]),
                target: "_blank",
                className: "icon brands fa-facebook-f",
              },
              elc("span", "label", "Facebook")
            )
          )
        )
      )
    );
  },
});
