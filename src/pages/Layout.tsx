import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import News from './News';
import Navigation from '../components/Header';
import defaultTheme from '../util/defaultTheme';
import GlobalStyle from '../components/ThemeWrapper';

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <>
          <Navigation />

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Layout;
