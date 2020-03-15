import * as React from 'react';
import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { ButtonExternal } from '../Button';
import { Card } from '../../types/data.d';

const SelectedPagesList = styled.div`
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

const SelectedPage = styled.a`
  background: ${props => props.theme.colors.surface};
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.xs}rem;
  text-decoration: none;
  color: ${props => props.theme.colors.onSurface};
  border: 1px solid white;
  border-radius: 1rem;
  margin: calc(${props => props.theme.spacing.xs}rem / 2);
  transition: all 0.15s ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.colors.secondaryVariant};
  }
  @media screen and (min-width: 768px) {
    width: calc(50% - ${props => props.theme.spacing.xs}rem);
    padding: ${props => props.theme.spacing.xs}rem;
    margin: calc(${props => props.theme.spacing.xs}rem / 2);
  }
  @media screen and (min-width: 1280px) {
    width: calc(33.332% - ${props => props.theme.spacing.xs}rem);
  }
`;

const SelectedPageImage = styled.img`
  width: 100%;
`;

const SelectedPageTitle = styled.h3`
  margin: ${props => props.theme.spacing.xs}rem 0 ${props => props.theme.spacing.xs}rem;
  text-align: left;
  transition: all 0.15s ease-in-out;
  text-decoration: underline;
  text-decoration-color: transparent;
  ${props => createFontStyles(props.theme.fonts.b2)};
  ${SelectedPage}:hover &,
  ${SelectedPage}:focus & {
    text-decoration-color: ${props => props.theme.colors.primary};
  }
`;

export interface Props {
  cards: Card[];
}

export const List: React.FunctionComponent<Props> = ({ cards }) => {
  const PLACEHOLDER =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  return (
    <SelectedPagesList>
      {cards.map(card => (
        <SelectedPage
          key={card.id}
          href="#"
          title={`Details about card ${card.name}`}
          aria-label={`Details about card ${card.name}`}
        >
          <SelectedPageTitle>{card.name}</SelectedPageTitle>
          <SelectedPageImage src={card.imageUrl ? card.imageUrl : PLACEHOLDER} alt={card.name} />
          <ButtonExternal href={`./${card.id}`} variant="primary" size="medium">
            View More
          </ButtonExternal>
        </SelectedPage>
      ))}
    </SelectedPagesList>
  );
};

export default List;
