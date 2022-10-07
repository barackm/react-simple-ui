import React from 'react';
import PropTypes from 'prop-types';
import { blue, cyan, green, grey, orange, red } from '../colors';
import { createGlobalStyle } from 'styled-components';
const ThemeContext = React.createContext();

const ThemeProvider = ({ children, theme = {} }) => {
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

  const mergedTheme = Object.keys(defaultTheme).reduce((acc, key) => {
    if (theme[key]) {
      acc[key] = { ...defaultTheme[key], ...theme[key] };
    } else {
      acc[key] = defaultTheme[key];
    }
    return acc;
  }, {});

  const GlobalStyle = createGlobalStyle`
    body {
      font-family: ${mergedTheme.typography.fontFamily};
      font-size: ${mergedTheme.typography.fontSize}px;
      font-weight: ${mergedTheme.typography.fontWeightRegular};
    }
  `;

  return (
    <ThemeContext.Provider value={mergedTheme}>
      <GlobalStyle />
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeConsumer = ThemeContext.Consumer;
// props validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        light: PropTypes.string,
        main: PropTypes.string,
        dark: PropTypes.string,
        contrastText: PropTypes.string,
      }),
      secondary: PropTypes.shape({
        light: PropTypes.string,
        main: PropTypes.string,
        dark: PropTypes.string,
        contrastText: PropTypes.string,
      }),
      info: PropTypes.shape({
        light: PropTypes.string,
        main: PropTypes.string,
        dark: PropTypes.string,
        contrastText: PropTypes.string,
      }),
      success: PropTypes.shape({
        light: PropTypes.string,
        main: PropTypes.string,
        dark: PropTypes.string,
        contrastText: PropTypes.string,
      }),
      warning: PropTypes.shape({
        light: PropTypes.string,
        main: PropTypes.string,
        dark: PropTypes.string,
        contrastText: PropTypes.string,
      }),
      error: PropTypes.shape({
        light: PropTypes.string,
        main: PropTypes.string,
        dark: PropTypes.string,
        contrastText: PropTypes.string,
      }),
      text: PropTypes.shape({
        light: PropTypes.string,
        main: PropTypes.string,
        dark: PropTypes.string,
        contrastText: PropTypes.string,
      }),
    }),
    typography: PropTypes.shape({
      fontFamily: PropTypes.string,
      fontSize: PropTypes.number,
      fontWeightLight: PropTypes.number,
      fontWeightRegular: PropTypes.number,
      fontWeightMedium: PropTypes.number,
      fontWeightBold: PropTypes.number,
    }),
  }),
};

export { ThemeProvider, ThemeConsumer };
