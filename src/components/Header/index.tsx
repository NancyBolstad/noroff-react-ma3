import * as React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Nav } from './styles';
import ThemeWrapper from '../ThemeWrapper';

const Header: React.FC = () => {
  return (
    <ThemeWrapper>
      <Wrapper>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/news">News List</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </ThemeWrapper>
  );
};

export default Header;
