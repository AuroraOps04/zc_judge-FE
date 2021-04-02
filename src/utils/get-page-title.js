import defaultSettings from "@/settings";

const title = defaultSettings.title || "至诚在线评测系统";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
