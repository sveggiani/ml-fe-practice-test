import React, { Component } from 'react';
import { parse as qsParse } from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchSearchItems } from '../state/actions';
import ProductsList from '../components/ProductsList';

class DisplaySearchResults extends Component {
  static propTypes = {
    categories: PropTypes.array,
    items: PropTypes.array,
    isFetching: PropTypes.bool,
    location: PropTypes.object,
    searchItems: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { location, searchItems } = this.props;

    // fetch search items after mounting component
    const queryString = qsParse(location.search);
    if (queryString) {
      searchItems(queryString.search);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { location, searchItems } = this.props;

    // fetch search items after location change
    const { location: newLocation } = nextProps;
    if (newLocation && location.search !== newLocation.search) {
      searchItems(qsParse(newLocation.search).search);
    }
  }

  render() {
    const { categories, items, isFetching } = this.props;
    return (
      <div>
        <ProductsList
          items={items}
          categories={categories}
          isFetching={isFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.itemsSearch.categories,
  isFetching: state.itemsSearch.isFetching,
  items: state.itemsSearch.data
});

const mapDispatchToProps = dispatch => ({
  searchItems: query => {
    dispatch(fetchSearchItems(query));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplaySearchResults);
