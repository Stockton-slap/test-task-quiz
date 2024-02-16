import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#F2F3F5",
    secondary: "#C4C8CC",
    bg: "#1F002B",
    accent: "#E4229C",
    btn: "#36173D",
  },
  fonts: {
    main: "Nunito, sans-serif",
    secondary: "Albert, sans-serif",
    thankYou: "Niconne",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fonts.main};
    color: ${theme.colors.primary};
    background-color: ${theme.colors.bg};
    
  }

  h1,h2,h3,h4,h5,h6,p,ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
