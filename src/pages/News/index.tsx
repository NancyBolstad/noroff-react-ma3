import * as React from 'react';
import Typography from '../../components/Typography';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';

interface Props {}

export const News: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Typography element="h1" variant="h1" content="News List" isPrimaryColor align="center" />
      <HomeContent>
        <NewsList />
      </HomeContent>
    </>
  );
};

export default News;
