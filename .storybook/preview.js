import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { lightModeTheme, darkModeTheme } from "../src/themes";
import GlobalStyle from "../src/globalStyles";
import "../src/index.css";

const themes = [lightModeTheme, darkModeTheme];
addDecorator(withThemesProvider(themes), ThemeProvider);
addDecorator((Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
