import * as React from 'react';
import { storiesOf } from '@storybook/react';
import NewsList from './';

console.log(NewsList);
storiesOf('Component/NewsList', module).add('Default', () => <NewsList />);
