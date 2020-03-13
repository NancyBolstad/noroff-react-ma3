import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrapper, MenuLeft, MenuRight, NavLinkList } from './styles';
import ThemeWrapper from '../ThemeWrapper';

const Header: React.FC = () => {
  let location = useLocation();
  return (
    <ThemeWrapper>
      <Wrapper>
        <nav>
          <a href="/news">Noroff React App</a>
          <NavLinkList>
            <MenuLeft>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News List</Link>
              </li>
            </MenuLeft>
            <MenuRight>
              <li>
                <Link to="/login">{location.pathname === '/profile' ? 'Log Out' : 'Login'}</Link>
              </li>
            </MenuRight>
          </NavLinkList>
        </nav>
      </Wrapper>
    </ThemeWrapper>
  );
};

export default Header;
