import React from 'react';

const valuesOrder = bundle => {
  const values = [];
  values.push(bundle['id']);
  values.push(bundle['name']);
  values.push(bundle['bundle_type']);
  values.push(bundle['country']);
  values.push(bundle['language']);
  values.push(bundle['licenses']);
  values.push(bundle['description']);
  return values;
}

const TableContent = ({ bundles }) =>
 (
   <tbody>
     {bundles.map(b => (
       <TableRow
         key={b.id}
         bundle={valuesOrder(b)}
       />
    ))}
   </tbody>
);


TableContent.propTypes = {
  bundles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

const TableRow = ({ bundle }) => (
  <tr>
    {bundle.map((info, i) => <td key={i}>{info}</td>)}
  </tr>
);

TableRow.propTypes = {
  bundle: React.PropTypes.array.isRequired,
};


export default TableContent;
