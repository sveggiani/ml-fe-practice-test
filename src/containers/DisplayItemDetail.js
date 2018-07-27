import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Alert from '../components/Alert';
import ProductDetail from '../components/ProductDetail';
import { fetchItemDetail } from '../state/actions';

/* eslint-disable */
class DisplayItemDetail extends Component {
  static propTypes = {
    categories: PropTypes.array,
    errorMessage: PropTypes.string,
    getDetail: PropTypes.func.isRequired,
    hasError: PropTypes.bool,
    item: PropTypes.array,
    location: PropTypes.object
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      getDetail
    } = this.props;

    getDetail(id);
  }

  render() {
    const { categories, errorMessage, hasError, isFetching, item } = this.props;
    return (
      <div>
        {hasError ? (
          <Alert message={errorMessage} />
        ) : (
          <ProductDetail
            item={item}
            categories={categories}
            isFetching={isFetching}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.itemDetail.categories,
  errorMessage: state.itemDetail.errorMessage,
  hasError: state.itemDetail.hasError,
  isFetching: state.itemDetail.isFetching,
  item: state.itemDetail.data
});

const mapDispatchToProps = dispatch => ({
  getDetail: id => {
    dispatch(fetchItemDetail(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayItemDetail);
