export interface Theme {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  buttonDefaultSize: string;
}

const lightModeTheme = {
  black: "#222222",
  white: "#ffffff",
  primary: "#48bae4",
  secondary: "#444e72",
  buttonDefaultSize: "1.8rem",
};

const darkMode = {
  primary: "#1a2b55",
};

const darkModeTheme = { ...lightModeTheme, ...darkMode };

export default lightModeTheme;
