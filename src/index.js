import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';

const settings = {
  gameTime: 10,
  errorCount: 5,
};

ReactDOM.render(
    <App
      errorCount={settings.errorCount}
      gameTime={settings.gameTime}
    />,
    document.getElementById(`root`)
);
