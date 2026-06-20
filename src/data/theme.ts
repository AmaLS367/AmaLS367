export const C = {
  cy: "#ffbe5c",
  te: "#ff8a3d",
  tx: "#ece0cf",
  mu: "#8a7a63",
  red: "#ff7a7a",
  am: "#ffd27a"
} as const;

export type ThemeName = "amber" | "cyan" | "green" | "mono";

export const themes: Record<ThemeName, [string, string]> = {
  amber: ["#ffbe5c", "#ff8a3d"],
  cyan:  ["#42e6ff", "#2bd4bf"],
  green: ["#6ef0a0", "#39d353"],
  mono:  ["#e6ddcf", "#b9ac98"]
};
