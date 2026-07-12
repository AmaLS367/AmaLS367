import { useState } from "react";
import { themes, type ThemeName } from "@/data/theme";

export const useAccentTheme = () => {
  const [accent, setAccent] = useState<ThemeName>(() => {
    try {
      const saved = localStorage.getItem("amadev_accent");
      if (saved === "amber" || saved === "cyan" || saved === "green" || saved === "mono") {
        return saved as ThemeName;
      }
    } catch (e) {
      // ignore
    }
    return "amber";
  });

  const handleSetAccent = (themeName: ThemeName) => {
    try {
      localStorage.setItem("amadev_accent", themeName);
    } catch (e) {
      // ignore
    }
    setAccent(themeName);
  };

  const activeThemeColors = themes[accent] || themes.amber;
  const c1 = activeThemeColors[0];
  const c2 = activeThemeColors[1];

  return { accent, handleSetAccent, c1, c2 };
};
