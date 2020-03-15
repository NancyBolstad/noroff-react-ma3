import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CardsList from './';
import { Root, Card } from '../../types/data';

let list: Card[];

async function getAllCards() {
  const API_BASE_URL: string = 'https://api.magicthegathering.io/v1/cards';
  console.log(11111111);
  try {
    console.log(22222222);
    const response = await fetch(API_BASE_URL);
    const data: Root = await response.json();
    list = data.cards;
    console.log(list);

    storiesOf('Component/AsyncCardsList', module).add('Default', () => <CardsList cards={list} />);

    return data;
  } catch (err) {
    throw err;
  }
}

getAllCards();
