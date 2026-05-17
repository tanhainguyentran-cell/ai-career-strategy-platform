const ACTIVE_TAB_KEY =
  "workspace-active-tab";

export function saveActiveTab(
  tab: string
) {
  if (
    typeof window ===
    "undefined"
  )
    return;

  localStorage.setItem(
    ACTIVE_TAB_KEY,
    tab
  );
}

export function getActiveTab() {
  if (
    typeof window ===
    "undefined"
  )
    return "Overview";

  return (
    localStorage.getItem(
      ACTIVE_TAB_KEY
    ) || "Overview"
  );
}