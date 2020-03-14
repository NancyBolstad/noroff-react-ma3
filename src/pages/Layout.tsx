import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeWrapper from '../components/ThemeWrapper';
import Header from '../components/Header';

const Home = lazy(() => import('./Home'));
const News = lazy(() => import('./News'));
const Login = lazy(() => import('./Login'));
const Profile = lazy(() => import('./Profile'));

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ThemeWrapper>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/profile">
              <Suspense fallback={<h1>Hellow</h1>}>
                <Profile />
              </Suspense>
            </Route>
            <Route path="/login">
              <Suspense fallback={<h1>Hellow</h1>}>
                <Login />
              </Suspense>
            </Route>
            <Route path="/news">
              <Suspense fallback={<h1>Hellow</h1>}>
                <News />
              </Suspense>
            </Route>
            <Route path="/">
              <Suspense fallback={<h1>Hellow</h1>}>
                <Home />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeWrapper>
  );
};

export default Layout;
