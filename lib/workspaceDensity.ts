export function getWorkspaceSpacing(
  density: string
) {
  switch (density) {
    case "compact":
      return "space-y-4";

    default:
      return "space-y-8";
  }
}