import { create } from "@storybook/theming/create";

export const theme = {
  colors: {
    white: "rgb(255, 255, 255)",
    darkWhite: "rgb(245, 245, 245)",
    black: "rgb(0, 0, 0)",
    grey: "rgb(230, 230, 230)",
    darkGrey: "rgb(170, 170, 170)",
    blue: "rgba(102, 160, 232, 1)",
    yellow: "rgb(244, 168, 61)",
    darkBlue: "rgb(36,59,85)",
  },
  fonts: {
    secondary: `"Exo", sans-serif`,
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "20px",
    xl: "26px",
    xxl: "60px",

    // 14 22 14 60 26 20 16 28 32 12
  },
  media: {
    laptop: "@media (max-width: 1024px)",
    tablet: "@media (max-width: 800px)",
    tabletSmall: "@media (max-width: 620px)",
    mobileLarge: "@media (max-width: 425px)",
    mobile: "@media (max-width: 350px)",
  },
};

export default create({
  colors: {
    white: "rgb(255, 255, 255)",
    darkWhite: "rgb(245, 245, 245)",
    black: "rgb(0, 0, 0)",
    grey: "rgb(230, 230, 230)",
    darkGrey: "rgb(170, 170, 170)",
    blue: "rgba(102, 160, 232, 1)",
    yellow: "rgb(244, 168, 61)",
    darkBlue: "rgb(36,59,85)",
  },
  fonts: {
    secondary: `"Exo", sans-serif`,
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "20px",
    xl: "26px",
    xxl: "60px",

    // 14 22 14 60 26 20 16 28 32 12
  },
  media: {
    laptop: "@media (max-width: 1024px)",
    tablet: "@media (max-width: 800px)",
    tabletSmall: "@media (max-width: 620px)",
    mobileLarge: "@media (max-width: 425px)",
    mobile: "@media (max-width: 350px)",
  },
});
