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

const getFileView = (file, fileAlt, blob) => {
  const fileExtension = !!file ? file.split(".").pop().toLowerCase() : null;

  switch (fileExtension) {
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
      return h("img", { src: blob, alt: fileAlt });

    case null:
      return "";

    default:
      return elc(
        "h4",
        "box",
        "Previzualizarea este disponibila doar pentru imagini in editor. " +
          "Pagina publicata va putea afisa imagini, linkuri, fisiere PDF si Office."
      );
  }
};

const googleDriveFolder = (entry) => {
  const folderId = entry.getIn(["data", "googleDriveFolderID"]);
  return (
    folderId &&
    elc("h4", "box", "Previzualizarea nu este disponibila pentru folderele Google Drive.")
  );
};

function page(entry, props) {
  const fileUrl = entry.getIn(["data", "file"]);
  const fileAlt = entry.getIn(["data", "fileAlt"]);
  const fileBlob = props.getAsset(fileUrl).toString();
  return el(
    "section",
    elc(
      "header",
      "main",
      el("h1", entry.getIn(["data", "title"])),
      elc(
        "span",
        "image main",
        getFileView(fileUrl, fileAlt, fileBlob),
        h("a", { href: "javascript:;" }, fileUrl)
      ),
      googleDriveFolder(entry),
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
