import React from 'react';
import { Link } from 'react-router-dom';

import ReactHelmet from '../../components/Helment';

import logo from '../../assets/images/logo.svg';

import { FeatureUrl } from '../../navigations/route.config/url.path';

import './App.css';

function App() {
  return (
    <>
      <ReactHelmet>
        <title>React base setup</title>
      </ReactHelmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Link to={FeatureUrl.path} className="App-link">
            API caller
          </Link>
        </header>
      </div>
    </>
  );
}

export default App;
