import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "./../src/theme/theme";
import React from "react";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
