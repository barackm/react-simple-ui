import React from 'react';
import { blue, cyan, green, grey, orange, red } from '../colors';
const ThemeContext = React.createContext({});

interface colorProps {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}
interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: {
    palette?: {
      primary?: colorProps;
      secondary?: colorProps;
      info?: colorProps;
      success?: colorProps;
      warning?: colorProps;
      error?: colorProps;
      text?: colorProps;
    };
  };
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme } = props;

  const defaultTheme = {
    palette: {
      primary: {
        light: blue[300],
        main: blue[500],
        dark: blue[700],
        contrastText: grey[50],
      },
      secondary: {
        main: grey[500],
        light: grey[300],
        dark: grey[700],
        contrastText: grey[50],
      },

      info: {
        main: cyan[500],
        light: cyan[300],
        dark: cyan[700],
        contrastText: grey[50],
      },

      success: {
        main: green[500],
        light: green[300],
        dark: green[700],
        contrastText: grey[50],
      },

      warning: {
        main: orange[500],
        light: orange[300],
        dark: orange[700],
        contrastText: grey[50],
      },

      error: {
        light: red[300],
        main: red[500],
        dark: red[700],
        contrastText: grey[50],
      },
      text: {
        main: grey[900],
        light: grey[700],
        dark: grey[900],
        contrastText: grey[50],
      },
    },

    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  };

  const mergedTheme = Object.keys(defaultTheme).reduce(
    (acc: any, key: string) => {
      // @ts-ignore
      if (theme[key]) {
        // @ts-ignore
        acc[key] = { ...defaultTheme[key], ...theme[key] };
      } else {
        // @ts-ignore
        acc[key] = defaultTheme[key];
      }
      return acc;
    },
    {},
  );

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeConsumer = ThemeContext.Consumer;
ThemeProvider.defaultProps = {
  theme: {},
};

export { ThemeProvider, ThemeConsumer };
