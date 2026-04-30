import './MainApp.css';
import React from 'react';
import brandLogo from './logo.svg';

const MainApp: React.FC = () => {
  return (
    <div className="main-app">
      <header className="main-app__header">
        <img src={brandLogo} className="main-app__logo" alt="brand logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="main-app__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default MainApp;
