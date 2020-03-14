import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ImageGrid } from '.';

export const mockImage = {
  imageURL:
    'https://images.unsplash.com/photo-1584088634200-52239888d599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80',
};

export const ImageGridStory = (
  <ImageGrid images={[mockImage, mockImage, mockImage]} text="Lorem Images" />
);

storiesOf('Component/ImageGrid', module).add('Basic usage', () => ImageGridStory);
