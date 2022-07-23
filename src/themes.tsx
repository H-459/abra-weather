export interface Theme {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  buttonDefaultSize: string;
}

export const lightModeTheme = {
  name: "Light",
  black: "#222222",
  white: "#ffffff",
  primary: "#48bae4",
  secondary: "#444e72",
  buttonDefaultSize: "1.8rem",
};

const darkMode = {
  name: "Dark",
  buttonDefaultSize: "2.8rem",
  primary: "#1a2b55",
};

export const darkModeTheme = { ...lightModeTheme, ...darkMode };

export default lightModeTheme;
