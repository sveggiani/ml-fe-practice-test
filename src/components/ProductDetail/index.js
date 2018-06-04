import React from 'react';
// import PropTypes from 'prop-types';

import Breadcrumbs from '../Breadcrumbs';
import Button from '../Button';
import './index.scss';

const ProductDetail = () => (
  <div className="product-detail">
    <div className="product-detail__header">
      <Breadcrumbs />
    </div>
    <div className="product-detail__content">
      <div className="product-detail__content__product">
        <div className="image">
          <img
            src="http://lorempixel.com/680/560/technics"
            alt="Product view"
          />
        </div>
        <div className="info">
          <p className="status">Nuevo - 237 vendidos</p>
          <h1 className="title">Deco Reverse Sombrero Oxford</h1>
          <p className="price">$ 1.980</p>
          <Button expanded>Comprar</Button>
        </div>
        <div className="description">
          <h2 className="title">Descripción del producto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            provident temporibus molestias error hic beatae iure vero. Aliquam
            ipsam aut distinctio expedita harum vitae porro molestiae
            repellendus perferendis, facere non.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ProductsList.propTypes = {
//   products: PropTypes.array
// };

export default ProductDetail;
