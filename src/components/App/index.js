import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Topbar from '../Topbar';
import ProductDetail from '../ProductDetail';
import DisplaySearchResults from '../../containers/DisplaySearchResults';

import './index.scss';

const App = () => (
  <Router>
    <div className="app">
      <div className="app__header">
        <Topbar />
      </div>
      <div className="app__content">
        <Route exact path="/" />
        <Route path="/items" component={DisplaySearchResults} />
        <Route path="/item/:id" component={ProductDetail} />
      </div>
      <div className="app__footer" />
    </div>
  </Router>
);

export default App;
