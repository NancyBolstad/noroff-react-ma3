import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 78px;
`;

export const Nav = styled.nav`
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
