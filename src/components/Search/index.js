import React from 'react';

import SearchIcon from '../../assets/images/ic_Search.png';
import './index.scss';

const Search = () => (
  <div className="search">
    <input
      type="text"
      className="search__box"
      placeholder="Nunca dejes de buscar"
    />
    <button className="search__button">
      <img src={SearchIcon} alt="" />
    </button>
  </div>
);

export default Search;
