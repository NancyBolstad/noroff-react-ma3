import * as React from 'react';
import styled, { css } from 'styled-components';
import Grid, { GridItem } from '../Grid';
import Heading from '../Heading';

interface Image {
  imageURL: string;
}

const ImageItem = styled.div<Image>`
  width: 100%;
  ${props =>
    props.imageURL &&
    css`
      background-image: url(${props.imageURL});
      background-size: cover;
      background-position: center;
    `};
`;

interface Props {
  images: Image[];
  text?: string;
}

export const ImageGrid: React.FunctionComponent<Props> = ({ images, text }) => {
  return (
    <>
      {!!text && <Heading content={text} />}
      <Grid>
        {images.map((image, k) => (
          <GridItem
            key={k}
            row={k === 0 || k === 3 ? 'span 2' : undefined}
            column={k === 0 ? 'span 2' : k === 3 ? 'span 3' : undefined}
          >
            <ImageItem imageURL={image.imageURL} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ImageGrid;
