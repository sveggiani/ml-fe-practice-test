import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Breadcrumbs from '../Breadcrumbs';
import ShippingIcon from '../../assets/images/ic_shipping.png';
import './index.scss';

const formatPrice = price =>
  `${price.amount}${price.decimals ? `.${price.decimals}` : ''}`;

const ProductsList = ({ items, categories }) => (
  <Fragment>
    {items.length && (
      <div className="products-list">
        <div className="products-list__header">
          <Breadcrumbs items={categories} />
        </div>
        <div className="products-list__content">
          {items.map(item => (
            <Link
              key={item.id}
              to={`/item/${item.id}`}
              className="products-list__content__item"
            >
              <div className="image">
                <img src={item.picture} alt={`Imagen de ${item.title}`} />
              </div>
              <div className="detail">
                <p className="price">
                  {`$ ${formatPrice(item.price)}`}
                  {item.free_shipping && (
                    <img
                      className="icon"
                      src={ShippingIcon}
                      alt="Free shipping"
                    />
                  )}
                </p>
                <h2 className="title">{item.title}</h2>
              </div>
              <div className="extra-info">
                {item.location && <p>{item.location}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}
  </Fragment>
);

ProductsList.propTypes = {
  categories: PropTypes.array,
  items: PropTypes.array
};

export default ProductsList;
