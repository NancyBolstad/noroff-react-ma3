import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Login from './Login';
import News from './News';
import ThemeWrapper from '../components/ThemeWrapper';

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
    padding-top: 1.5rem;
  }
  a {
    color: ${props => props.theme.colors.secondaryVariant};
    font-size: 2rem;
    font-weight: bold;
    margin-right: 1.8rem;
    text-decoration: none;
    border: 1px solid ${props => props.theme.colors.secondaryVariant};
    padding: 0.5rem 2.2rem;
    border-radius: 20px;
  }
  a:hover {
    opacity: 0.8;
  }
`;

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <Router>
      <div>
        <ThemeWrapper>
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
        </ThemeWrapper>

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
