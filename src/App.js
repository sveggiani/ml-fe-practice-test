import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import Search from './components/Search';

const App = () => (
  <Router>
    <div>
      <Search />
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} /> */}
    </div>
  </Router>
);

export default App;
