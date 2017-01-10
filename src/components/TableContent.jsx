import React from 'react';

const TableContent = ({ bundles }) =>
 (
   <tbody>
     {bundles.map(b => (
       <TableRow
         key={b.id}
         bundle={Object.values(b)}
       />
       ))}
   </tbody>
);


TableContent.propTypes = {
  bundles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

const TableRow = ({ bundle }) => (
  <tr>
    {bundle.map(info => <td key={info}>{info}</td>)}
  </tr>
);

TableRow.propTypes = {
  bundle: React.PropTypes.array.isRequired,
};


export default TableContent;
