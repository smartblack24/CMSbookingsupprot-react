import React from 'react';
import TableHeader from '../components/TableHeader';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const titlesE = ['Holder', 'Avaible Slots', 'Exp Date',
 'BookCode', 'Edu Contact', 'Admin Contact'];

class LicensesTable extends React.Component {
  render(){
    return (
      <div className="table-responsive container-fluid">
        <table className="table">
          <TableHeader titles={titlesE} />
        </table>
      </div>
    );
  }
}

LicensesTable = connect(
  
)(LicensesTable);

export default LicensesTable;
