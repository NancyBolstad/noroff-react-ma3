import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 78px;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding-top: 1.5rem;
  }
  a {
    color: ${props => props.theme.colors.secondaryVariant};
    font-size: 1.75rem;
    font-weight: bold;
    margin-right: 1.8rem;
    text-decoration: none;
    border-bottom: 2px solid ${props => props.theme.colors.secondaryVariant};
    padding: 0.5rem 2rem;
  }
  a:hover {
    opacity: 0.8;
  }
`;
