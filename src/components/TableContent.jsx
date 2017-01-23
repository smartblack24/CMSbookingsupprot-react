import React from 'react';
import { Link } from 'react-router';

const valuesOrder = bundle => {
  const values = [];
  values.push(bundle['bundle_type']);
  values.push(bundle['country']);
  values.push(bundle['language']);
  values.push(bundle['licenses']);
  values.push(bundle['description']);
  return values;
}

const customLink = bundle => {
  return  {
    label: bundle['name'],
    to: bundle['id'],
  };
}

const TableContent = ({ bundles }) =>
 (
   <tbody>
     {bundles.map(b => (
       <TableRow
         key={b.id}
         bundle={valuesOrder(b)}
         link={customLink(b)}
       />
    ))}
   </tbody>
);


TableContent.propTypes = {
  bundles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

const TableRow = ({ bundle, link }) => (
  <tr>
    <td><Link to={`/bundles/${link.to}`}>{link.label}</Link></td>
    {bundle.map((info, i) => <td key={i}>{info}</td>)}
  </tr>
);

TableRow.propTypes = {
  bundle: React.PropTypes.array.isRequired,
};


export default TableContent;
