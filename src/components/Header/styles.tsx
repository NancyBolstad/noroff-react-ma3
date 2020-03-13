import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 78px;
  background: ${props => props.theme.colors.secondaryVariant};
  color: ${props => props.theme.colors.onSecondary};
`;

export const NavLinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding-top: 1.5rem;

  a {
    color: ${props => props.theme.colors.onSecondary};
    font-size: 1.75rem;
    font-weight: bold;
    margin-right: ${props => props.theme.spacing.s}rem;
    text-decoration: none;
    padding: 0.5rem 2rem;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MenuLeft = styled.div`
  flex: 1;
  display: flex;
`;

export const MenuRight = styled.div``;
