import React, { Component } from 'react';
import { parse as qsParse } from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchSearchItems } from '../state/actions';
import ProductsList from '../components/ProductsList';

class DisplaySearchResults extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    items: PropTypes.array,
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
    const { isFetching, items } = this.props;
    return (
      <div>
        {isFetching && <div>...</div>}
        <ProductsList products={items} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
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
