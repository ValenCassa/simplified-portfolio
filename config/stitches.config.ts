import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      dockItem: "#E1E1E1",
      dockBackground:
        "linear-gradient(93.37deg, #F1F1F1 -6.79%, #ECECEC 107.27%)",
      dockBorder: "1px solid #E2E2E2",
      dockDivider: "#D9D9D9",
      primaryTextColor: "black",
      secondaryTextColor: "#5E5E5E",
      dockIcon: "#505050",
      hoverItem: "#F6F6F6",
      gray400: "#F3F3F3",
      // ...
      darkHoverItem: "#212121",
      darkDockItem: "#373737",
      darkDockBackground: "#292929",
      darkDockBorder: "1px solid #525252",
      darkDockDivider: "#525252",
      darkPrimaryTextColor: "#E1E1E1",
      darkSecondaryTextColor: "#B1B1B1",
      darkDockIcon: "#989898",
      darkGray400: "#141414",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  },
});
