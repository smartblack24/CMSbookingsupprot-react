import React from 'react';

const valuesOrder = bundle => {
  const values = [];
  values.push(bundle['holder']);
  values.push(bundle['slots']);
  values.push(bundle['exp_date']);
  values.push(bundle['book_code']);
  values.push(bundle['edu_contact']);
  values.push(bundle['adm_contact']);
  return values;
}

const LicensesTBody = ({ licenses }) =>
 (
   <tbody>
     {licenses.map(b => (
       <TableRow
         key={b.id}
         license={valuesOrder(b)}
       />
    ))}
   </tbody>
);


LicensesTBody.propTypes = {
  licenses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

const TableRow = ({ license }) => (
  <tr>
    {license.map((info, i) => <td key={i}>{info}</td>)}
  </tr>
);

TableRow.propTypes = {
  license: React.PropTypes.array.isRequired,
};


export default LicensesTBody;
