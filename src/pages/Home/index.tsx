import * as React from 'react';
import ThemeWrapper from '../../components/ThemeWrapper';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';
import ImageGrid from '../../components/ImageGrid';
import { mockImage } from '../../components/ImageGrid/story';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  return (
    <ThemeWrapper>
      <Heading content="Noroff React App Module Assignment 3" isPrimaryColor />
      <HomeContent>
        <ImageGrid images={[mockImage, mockImage, mockImage]} />
        <NewsList />
      </HomeContent>
    </ThemeWrapper>
  );
};

export default Home;
