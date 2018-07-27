import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Breadcrumbs from '../Breadcrumbs';
import Button from '../Button';
import Spinner from '../Spinner';
import { formatPrice } from '../../utils';

import './index.scss';

const ProductDetail = ({ categories, item, isFetching }) => (
  <Fragment>
    {!isFetching ? (
      <div className="product-detail">
        <div className="product-detail__header">
          <Breadcrumbs items={categories} />
        </div>
        <div className="product-detail__content">
          <div className="product-detail__content__product">
            <div className="image">
              <img src={item.picture} alt={`Imagen de ${item.title}`} />
            </div>
            <div className="info">
              <p className="status">
                {item.condition === 'new' ? 'Nuevo - ' : ''}
                {`${item.sold_quantity} vendidos`}
              </p>
              <h1 className="title">{item.title}</h1>
              <p className="price">{formatPrice(item.price)}</p>
              <Button expanded>Comprar</Button>
            </div>
            <div className="description">
              <h2 className="title">Descripción del producto</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    item.description &&
                    item.description.replace(/\n/g, '<br />')
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Spinner />
    )}
  </Fragment>
);

ProductDetail.propTypes = {
  categories: PropTypes.array,
  item: PropTypes.object,
  isFetching: PropTypes.bool
};

export default ProductDetail;
