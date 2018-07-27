import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import uuidv1 from 'uuid/v1';

import './index.scss';

const Breadcrumbs = ({ items }) => (
  <Fragment>
    {items.length ? (
      <div className="breadcrumbs">
        <div className="breadcrumbs__items">
          {items.map(item => (
            <a className="breadcrumbs__items__item" href="#" key={uuidv1()}>
              {item}
            </a>
          ))}
        </div>
      </div>
    ) : null}
  </Fragment>
);

Breadcrumbs.propTypes = {
  items: PropTypes.array
};

Breadcrumbs.defaultProps = {
  items: []
};

export default Breadcrumbs;
