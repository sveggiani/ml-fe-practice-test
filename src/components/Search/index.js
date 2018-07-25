import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import SearchIcon from '../../assets/images/ic_Search.png';
import './index.scss';

class Search extends Component {
  static propTypes = {
    isFetching: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.searchField = null;
    this.state = {
      redirectTo: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.searchField.value.trim()) {
      return;
    }

    // TODO: add a check to avoid redirecting to the same URL
    const redirectTo = `/items?search=${this.searchField.value}`;
    this.setState({
      redirectTo
    });
  }

  render() {
    const { isFetching } = this.props;
    const { redirectTo } = this.state;

    return (
      <div className="search">
        {redirectTo && <Redirect push to={redirectTo} />}
        <form className="search__form" onSubmit={e => this.handleSubmit(e)}>
          <input
            className="search__form__box"
            placeholder="Nunca dejes de buscar..."
            ref={node => {
              this.searchField = node;
            }}
            type="text"
          />
          <button
            className="search__form__button"
            disabled={isFetching}
            type="submit"
          >
            <img src={SearchIcon} alt="" />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
