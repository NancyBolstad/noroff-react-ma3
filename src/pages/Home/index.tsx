import * as React from 'react';
import ThemeWrapper from '../../components/ThemeWrapper';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  return (
    <ThemeWrapper>
      <Heading content="Home Page" isPrimaryColor />
      <HomeContent>
        <NewsList />
        <NewsList />
        <NewsList />
      </HomeContent>
    </ThemeWrapper>
  );
};

export default Home;
