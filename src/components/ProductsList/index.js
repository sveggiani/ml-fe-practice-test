import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Breadcrumbs from '../Breadcrumbs';
import ShippingIcon from '../../assets/images/ic_shipping.png';
import './index.scss';

const ProductsList = ({ products }) => (
  <div className="products-list">
    <div className="products-list__header">
      <Breadcrumbs />
    </div>
    <div className="products-list__content">
      {products.map(item => (
        <Link
          key={item.id}
          to="/item/32"
          className="products-list__content__item"
        >
          <div className="image">
            <img src={item.thumbnail} alt="Product" />
          </div>
          <div className="detail">
            <p className="price">
              $ 1.980 {item.index}
              <img className="icon" src={ShippingIcon} alt="Free shipping" />
            </p>
            <h2 className="title">{item.title}</h2>
          </div>
          <div className="extra-info">
            <p>Ciudad de Mendoza</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.array
};

export default ProductsList;
