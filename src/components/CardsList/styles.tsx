import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: ${props => props.theme.spacing.xs}rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    padding: ${props => props.theme.spacing.xs}rem ${props => props.theme.spacing.l}rem;
  }
`;

export const List = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: calc(-${props => props.theme.spacing.xs}rem / 2);
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    margin: calc(-${props => props.theme.spacing.xs}rem / 2);
  }
`;

export const Card = styled.div`
  background: ${props => props.theme.colors.surface};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.xs}rem;
  text-decoration: none;
  color: ${props => props.theme.colors.onSurface};
  border: 2px solid white;
  margin: calc(${props => props.theme.spacing.xs}rem / 2);
  transition: all 0.15s ease-in-out;
  @media screen and (min-width: 768px) {
    width: calc(50% - ${props => props.theme.spacing.xs}rem);
    padding: ${props => props.theme.spacing.xs}rem;
    margin: calc(${props => props.theme.spacing.xs}rem / 2);
  }
  @media screen and (min-width: 1280px) {
    width: calc(31.333% - ${props => props.theme.spacing.m}rem);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.xs}rem;
`;
