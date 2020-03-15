import * as React from 'react';
import Typography from '../../components/Typography';
import HomeContent from '../../components/HomeContent';
import CardsList from '../../components/CardsList';

import { Root, Card } from '../../types/data';

interface Props {}

let list: Card[];

async function getAllCards() {
  const API_BASE_URL: string = 'https://api.magicthegathering.io/v1/cards';
  try {
    const response = await fetch(API_BASE_URL);
    const data: Root = await response.json();
    list = data.cards;

    return data;
  } catch (err) {
    throw err;
  }
}

export const Cards: React.FunctionComponent<Props> = () => {
  getAllCards();

  return (
    <>
      <Typography element="h1" variant="h1" content="News List" isPrimaryColor align="center" />
      <HomeContent>
        <CardsList cards={list} />
      </HomeContent>
    </>
  );
};

export default Cards;
