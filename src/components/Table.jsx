import React from 'react';
import TableHeader from './TableHeader';
import TableBody from '../containers/TableBody';

const titlesE = ['Name', 'Type', 'Country', 'Language', 'Licenses', 'Description'];

const Table = () => (
  <div className="table-responsive container-fluid">
    <table className="table">
      <TableHeader titles={titlesE} />
      <TableBody />
    </table>
  </div>
);

export default Table;
