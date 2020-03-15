import * as React from 'react';
import { storiesOf } from '@storybook/react';
import HomeContent from './';
import Typography from '../Typography';

const mockHeadingA = (
  <Typography
    element="h3"
    variant="h3"
    content="Neque porro quisquam dolorem"
    isPrimaryColor
    align="center"
  />
);
const mockHeadingB = (
  <Typography element="h5" variant="h5" content="Neque porro quisquam dolorem" align="center" />
);

export const mockChildren = [mockHeadingA, mockHeadingB, mockHeadingA, mockHeadingB];

storiesOf('Component/HomeContent', module).add('Default', () => (
  <HomeContent children={mockChildren} />
));
