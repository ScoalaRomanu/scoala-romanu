import { el, wrap } from "./element-builder.mjs";

export const ConfigErrorsPreview = createClass({
  render: function () {
    return wrap(
      el("h2", el("i", "Pagina 404:")),
      this.props.widgetsFor("http_404").getIn(["widgets", "header"]),
      h("hr")
    );
  },
});
