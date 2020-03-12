import * as React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../util/defaultTheme';

export interface Props {}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Anton|Roboto&display=swap');  

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.onBackground};
    background-color:${props => props.theme.colors.background};
  }
  * {
    box-sizing: border-box;
  }
`;

const Content = styled.div``;

const ThemeWrapper: React.FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <GlobalStyle />
      <Content>{children}</Content>
    </div>
  </ThemeProvider>
);

export default ThemeWrapper;
