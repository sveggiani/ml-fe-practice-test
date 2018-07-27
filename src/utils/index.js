import React from 'react';

const formatPrice = price => {
  if (typeof price !== 'object') {
    return '';
  }
  return (
    <span className="formatted-price">
      $ {price.amount.toLocaleString()}
      {price.decimals && (
        <span className="formatted-price__decimals">
          .
          <span className="formatted-price__decimals__digits">
            {`${price.decimals}`}
          </span>
        </span>
      )}
    </span>
  );
};

export { formatPrice };
