import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableContent from '../components/TableContent';
import { getFilteredBundles } from '../reducers';
import * as actions from '../actions';

const mapStateToProps = state => ({
  bundles: getFilteredBundles(state),
});

const TableBody = connect(mapStateToProps)(TableContent);

export default TableBody;
