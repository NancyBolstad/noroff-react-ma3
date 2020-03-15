import React from 'react';
import Typography from '../../components/Typography';
import HomeContent from '../../components/HomeContent';
import ImageGrid from '../../components/ImageGrid';
import { createImagesList } from '../../util/mockHelpers';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Typography
        element="h1"
        variant="h1"
        content="Noroff React App - Development"
        isPrimaryColor
        align="center"
      />
      <HomeContent>
        <ImageGrid images={createImagesList(7)} />
      </HomeContent>
    </>
  );
};

export default Home;
