import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from '../components/Search';

const mapStateToProps = state => ({
  isFetching: state.itemsSearch.isFetching
});

const SearchItems = connect(mapStateToProps)(withRouter(Search));

export default SearchItems;
