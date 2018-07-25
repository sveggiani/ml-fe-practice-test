import React from 'react';

import Brand from '../Brand';
import SearchItems from '../../containers/SearchItems';
import './index.scss';

const Topbar = () => (
  <div className="topbar">
    <div className="topbar__content">
      <Brand />
      <SearchItems />
    </div>
  </div>
);

export default Topbar;
