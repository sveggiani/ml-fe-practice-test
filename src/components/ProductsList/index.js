import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Breadcrumbs from '../Breadcrumbs';
import ShippingIcon from '../../assets/images/ic_shipping.png';
import './index.scss';

const ProductsList = () => (
  <div className="products-list">
    <div className="products-list__header">
      <Breadcrumbs />
    </div>
    <div className="products-list__content">
      <Link to="/item/32" className="products-list__content__item">
        <div className="image">
          <img src="http://lorempixel.com/180/180/technics" alt="Product" />
        </div>
        <div className="detail">
          <p className="price">
            $ 1.980
            <img className="icon" src={ShippingIcon} alt="Free shipping" />
          </p>
          <h2 className="title">
            Apple Touch 5g 16gb Negro Igual A Nuevo Completo Único
          </h2>
        </div>
        <div className="extra-info">
          <p>Ciudad de Mendoza</p>
        </div>
      </Link>
      <Link to="/item/32" className="products-list__content__item">
        <div className="image">
          <img src="http://lorempixel.com/180/180/technics" alt="Product" />
        </div>
        <div className="detail">
          <p className="price">
            $ 1.980{' '}
            <img className="icon" src={ShippingIcon} alt="Free shipping" />
          </p>
          <h2 className="title">
            Apple Touch 5g 16gb Negro Igual A Nuevo Completo Único
          </h2>
        </div>
        <div className="extra-info">
          <p>Ciudad de Mendoza</p>
        </div>
      </Link>
    </div>
  </div>
);

// ProductsList.propTypes = {
//   products: PropTypes.array
// };

export default ProductsList;
