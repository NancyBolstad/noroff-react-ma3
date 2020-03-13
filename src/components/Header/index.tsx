import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper, Nav, MenuLeft, MenuRight, NavLinkList, NavLink, LoginButton } from './styles';
import ThemeWrapper from '../ThemeWrapper';

const Header: React.FC = () => {
  let location = useLocation();
  return (
    <ThemeWrapper>
      <Wrapper>
        <Nav>
          <NavLinkList>
            <MenuLeft>
              <li>
                <NavLink to="/">L-o-G-o</NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/news">News List</NavLink>
              </li>
            </MenuLeft>
          </NavLinkList>
          <MenuRight>
            <li>
              <LoginButton to="/login">
                {location.pathname === '/profile' ? 'Log Out' : 'Login'}
              </LoginButton>
            </li>
          </MenuRight>
        </Nav>
      </Wrapper>
    </ThemeWrapper>
  );
};

export default Header;
