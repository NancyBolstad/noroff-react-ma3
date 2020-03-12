import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import News from './News';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 78px;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
  }
  a {
    color: ${props => props.theme.colors.primaryVariant};
    font-size: 2rem;
    font-weight: bold;
    margin-right: ${props => props.theme.spacing.m}rem;
  }
`;

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <Router>
      <div>
        <Header>
          <Nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </Nav>
        </Header>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
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
