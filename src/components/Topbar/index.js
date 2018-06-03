import React from 'react';

import Brand from '../Brand';
import Search from '../Search';
import './index.scss';

const Topbar = () => (
  <div className="topbar">
    <div className="topbar__content">
      <Brand />
      <Search />
    </div>
  </div>
);

export default Topbar;
