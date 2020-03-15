import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.onSurface};
  overflow: auto;
`;

export const ListFlexParent = styled.ul<{ twoColumns?: boolean }>`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.m}rem ${props => props.theme.spacing.xl}rem;
  display: flex;
  flex-direction: column;

  ${props =>
    props.twoColumns &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
        flex-direction: row;
        flex-wrap: wrap;
      }
    `}
`;

export const ItemFlexChild = styled.li<{ twoColumns?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.s}rem;
  padding: 0;

  ${props =>
    props.twoColumns &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
        width: 50%;
        padding: ${props => props.theme.spacing.s}rem;
      }
    `}
`;

export const ItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 615px;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${props => props.theme.colors.secondary};
    margin-left: ${props => props.theme.spacing.xs}rem;
    margin-top: 0.5rem;
  }
`;
