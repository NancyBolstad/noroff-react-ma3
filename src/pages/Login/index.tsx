import * as React from 'react';
import ThemeWrapper from '../../components/ThemeWrapper';
import HomeContent from '../../components/HomeContent';
import LoginForm from '../../components/LoginForm';
import Navigation from '../../components/Header';

interface Props {}

export const Login: React.FunctionComponent<Props> = () => {
  return (
    <ThemeWrapper>
      <Navigation />
      <HomeContent>
        <LoginForm />
      </HomeContent>
    </ThemeWrapper>
  );
};

export default Login;
