import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CardsList from './';
import { Root, Card } from '../../types/data';

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

getAllCards();

storiesOf('Component/CardsList', module).add('Default', () => <CardsList cards={list} />);
