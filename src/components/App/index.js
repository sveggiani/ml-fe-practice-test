import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Topbar from '../Topbar';
import ProductDetail from '../ProductDetail';
import ProductsList from '../ProductsList';
import './index.scss';

const App = () => (
  <Router>
    <div className="app">
      <div className="app__header">
        <Topbar />
      </div>
      <div className="app__content">
        <Route exact path="/" component={null} />
        <Route path="/items/" component={ProductsList} />
        <Route path="/item/:id" component={ProductDetail} />
      </div>
      <div className="app__footer">
        <Link to="/">Home</Link> |
        <Link to="/items?query=my%20products">Items</Link> |
        <Link to="/item/:32">Item detail</Link>
      </div>
    </div>
  </Router>
);

export default App;
