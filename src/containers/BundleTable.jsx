import React from 'react';
import TableHeader from '../components/TableHeader';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TableContent from '../components/TableContent';
import { getFilteredBundles } from '../reducers';
import * as actions from '../actions';


const titlesE = ['Name', 'Type', 'Country',
 'Language', 'Licenses', 'Description'];

class BundleTable extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if(!token){
      browserHistory.push('/');
    }
    this.fetchData();
  }

  fetchData() {
    const { fetchBundles } = this.props;
    fetchBundles();
  }

  render() {
    return (
      <div className="table-responsive container-fluid">
        <table className="table">
          <TableHeader titles={titlesE} />
          <TableContent bundles={this.props.bundles} />
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bundles: getFilteredBundles(state),
});


BundleTable = connect(
  mapStateToProps,
  actions
)(BundleTable);

export default BundleTable;
