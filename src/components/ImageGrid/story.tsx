import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ImageGrid } from '.';

export const mockImage = {
  imageURL:
    'https://res.cloudinary.com/oyvindhermansen/image/upload/v1568385948/qfwh7yghtj5buvssnvzc.jpg',
};

export const ImageGridStory = (
  <ImageGrid images={[mockImage, mockImage, mockImage]} text="Lorem Images" />
);

storiesOf('Component/ImageGrid', module).add('Basic usage', () => ImageGridStory);
