import React from 'react';
import { connect } from 'react-redux';
import { setSearch } from '../actions';

let SearchFilter = ({ dispatch }) => {
  let search;
  return (
    <form className="search-container">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        ref={(node) => {
          search = node;
        }}
        onChange={(e) => {
          e.preventDefault();
          dispatch(setSearch(search.value));
        }}
      />
    </form>
  );
};

SearchFilter = connect()(SearchFilter);

export default SearchFilter;
