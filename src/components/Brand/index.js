import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/Logo_ML.png';

const Brand = () => (
  <div className="brand">
    <Link to="/">
      <img src={logoImage} alt="Mercado Libre logo" />
    </Link>
  </div>
);

export default Brand;
