import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Topbar from '../../components/Topbar';
import Routes from '../../routes/Routes';

import '../../styles/Global.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />

        <Routes />
      </Router>

      <h1>teste</h1>
    </div>
  );
}

export default App;
