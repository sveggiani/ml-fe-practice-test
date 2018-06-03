import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import Topbar from '../Topbar';
import './index.scss';

const App = () => (
  <Router>
    <div className="app">
      <div className="app__header">
        <Topbar />
      </div>
      <div className="app__content">
        {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} /> */}
      </div>
      <div className="app__footer" />
    </div>
  </Router>
);

export default App;
