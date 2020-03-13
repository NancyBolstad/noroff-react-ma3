import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav } from './styles';

const Navigation: React.FC = () => {
  return (
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
            <Link to="/news">News List</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Navigation;
