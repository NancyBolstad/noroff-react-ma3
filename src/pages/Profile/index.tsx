import * as React from 'react';
import Typography from '../../components/Typography';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';

interface Props {}

export const Profile: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Typography element="h1" variant="h1" content="Welcome back!" align="center" isPrimaryColor />
      <HomeContent>
        <NewsList twoColumns />
      </HomeContent>
    </>
  );
};

export default Profile;
