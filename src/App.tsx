import React from 'react';
import './App.css';
import Home from './pages/Home';

const homePage = {
  headingContent: 'Welcome to Home Page',
};

function App() {
  return <Home {...homePage} />;
}

export default App;
