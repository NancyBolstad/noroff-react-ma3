import * as React from 'react';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';
import ImageGrid from '../../components/ImageGrid';
import { mockImage } from '../../components/ImageGrid/story';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Heading content="Noroff React App" isPrimaryColor />
      <HomeContent>
        <ImageGrid images={[mockImage, mockImage, mockImage]} />
        <NewsList />
      </HomeContent>
    </>
  );
};

export default Home;
