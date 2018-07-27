import React, { Component } from 'react';
// import { parse as qsParse } from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchItemDetail } from '../state/actions';
import ProductDetail from '../components/ProductDetail';

/* eslint-disable */
class DisplayItemDetail extends Component {
  static propTypes = {
    categories: PropTypes.array,
    items: PropTypes.array,
    location: PropTypes.object,
    getDetail: PropTypes.func.isRequired
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
    const { item, categories, isFetching } = this.props;
    return (
      <div>
        <ProductDetail
          item={item}
          categories={categories}
          isFetching={isFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.itemDetail.categories,
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
