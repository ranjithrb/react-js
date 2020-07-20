import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import { FeatureUrl } from '../../navigations/route.config/url.path';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Link to={FeatureUrl.path} className="App-link">
          Make an API call
        </Link>
      </header>
    </div>
  );
}

export default App;
