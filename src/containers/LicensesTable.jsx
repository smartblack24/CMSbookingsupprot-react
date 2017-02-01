import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, withRouter } from 'react-router';
import { getFilteredLicenses } from '../reducers'
import TableHeader from '../components/TableHeader';
import LicensesTBody from '../components/license/LicensesTBody';
import * as actions from '../actions';

const titlesE = ['Holder', 'Avaible Slots', 'Exp Date',
 'BookCode', 'Edu Contact', 'Admin Contact'];

class LicensesTable extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if(!token){
      browserHistory.push('/');
    }
    this.fetchData();
  }

  fetchData() {
    const { params, fetchLicenses } = this.props;
    fetchLicenses(params.bundleId);
  }
  render(){
    return (
      <div className="table-responsive container-fluid">
        <table className="table">
          <TableHeader titles={titlesE} />
          <LicensesTBody licenses={this.props.licenses}/>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = (state, { params }) => {
   return {
     licenses: getFilteredLicenses(state),
     params,
   }
};

LicensesTable = withRouter(connect(
  mapStoreToProps,
  actions
)(LicensesTable));

export default LicensesTable;
