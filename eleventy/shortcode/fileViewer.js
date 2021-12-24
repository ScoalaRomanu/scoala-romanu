module.exports = [
  [
    "fileViewer",
    (file = "", fileAlt = "") => {
      return getFileViewHTML(file, fileAlt);
    },
  ],
];

const getFileViewHTML = (file, fileAlt) => {
  const fileExtension = getFileExtensionByTitle(file);

  const iframe = (url) =>
    `<iframe src="${url}" title=${fileAlt} frameborder="0"` +
    ` style="height: 90vh; width: 100%"/></iframe>` +
    `<a href="${url}" target="_blank">${url}</a>`;

  switch (fileExtension) {
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
      return `<img src="${file}" alt="${fileAlt}" />`;

    case "pdf":
      return iframe(file);

    case "ppt":
    case "pptx":
    case "doc":
    case "docx":
    case "xls":
    case "xlsx":
      return iframe(
        `https://view.officeapps.live.com/op/embed.aspx?src=${decodeURIComponent(file)}`
      );

    default:
      return "";
  }
};

const getFileExtensionByTitle = (filename) => {
  return !!filename ? filename.split(".").pop().toLowerCase() : null;
};
