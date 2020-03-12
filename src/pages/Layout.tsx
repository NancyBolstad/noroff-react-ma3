import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import News from './News';
import ThemeWrapper from '../components/ThemeWrapper';
import Navigation from '../components/Header';

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <Router>
      <div>
        <ThemeWrapper>
          <Navigation />
        </ThemeWrapper>

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
      </div>
    </Router>
  );
};

export default Layout;
