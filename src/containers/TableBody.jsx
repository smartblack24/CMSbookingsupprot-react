import React from 'react';
import { connect } from 'react-redux';
import TableContent from '../components/TableContent';
import { getFilteredBundles } from '../reducers';
import * as actions from '../actions';

class TableBody extends React.Component{
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchBundles } = this.props;
    fetchBundles();
  }

  render() {
    return (<TableContent {...this.props} />);
  }
}

const mapStateToProps = state => ({
  bundles: getFilteredBundles(state),
});


TableBody = connect(
  mapStateToProps,
  actions
)(TableBody);

export default TableBody;
