import React from 'react';
import Typography from '../Typography';
import { ButtonExternal } from '../Button';
import { Card } from '../../types/data.d';
import { Wrapper, List, Card as Item, CardImage } from './styles';

export interface Props {
  listTitle?: string;
  cards?: Card[];
}

export const CardsList: React.FunctionComponent<Props> = ({ listTitle, cards }) => {
  const PLACEHOLDER =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  return (
    <Wrapper>
      {!!listTitle && <Typography element="h2" variant="h2" content={listTitle} align="center" />}
      <List>
        {(cards || []).map(card => (
          <Item
            key={card.id}
            href="#"
            title={`Details about card ${card.name}`}
            aria-label={`Details about card ${card.name}`}
          >
            <Typography element="h3" variant="h3" content={card.name} />
            <CardImage src={card.imageUrl ? card.imageUrl : PLACEHOLDER} alt={card.name} />
            <ButtonExternal href={`./${card.id}`} variant="primary" size="medium">
              View More
            </ButtonExternal>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default CardsList;
