import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Topbar from '../../components/Topbar';
import Routes from '../../routes/Routes';

import '../../styles/global.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
