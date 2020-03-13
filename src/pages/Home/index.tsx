import * as React from 'react';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Heading content="Home Page" isPrimaryColor />
      <HomeContent>
        <NewsList />
        <NewsList />
        <NewsList />
      </HomeContent>
    </>
  );
};

export default Home;
