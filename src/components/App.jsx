import React from 'react';
import WelcomeScreen from './WelcomeScreen.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {gameTime, errorCount} = props;

  return <WelcomeScreen time={gameTime} errorCount={errorCount} />;
};

export default App;
