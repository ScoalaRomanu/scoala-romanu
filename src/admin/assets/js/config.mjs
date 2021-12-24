import { ConfigErrorsPreview } from "./preview/config-errors.mjs";
import { ConfigHomePreview } from "./preview/config-home.mjs";
import { ConfigSidebarPreview } from "./preview/config-sidebar.mjs";
import { ConfigSocialPreview } from "./preview/config-social.mjs";
import { HomeFeaturePreview } from "./preview/home-feature.mjs";
import { PagePreview } from "./preview/page.mjs";
import { SidebarFeaturePreview } from "./preview/sidebar-feature.mjs";

CMS.registerPreviewStyle("/assets/css/main.min.css");
CMS.registerPreviewStyle("/admin/assets/css/preview.css");

CMS.registerPreviewTemplate("config-errors", ConfigErrorsPreview);
CMS.registerPreviewTemplate("config-home", ConfigHomePreview);
CMS.registerPreviewTemplate("config-sidebar", ConfigSidebarPreview);
CMS.registerPreviewTemplate("config-social", ConfigSocialPreview);
CMS.registerPreviewTemplate("home-feature", HomeFeaturePreview);
CMS.registerPreviewTemplate("page", PagePreview);
CMS.registerPreviewTemplate("sidebar-feature", SidebarFeaturePreview);
