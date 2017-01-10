import React from 'react';

const TableHeader = ({ titles }) => (
  <thead>
    <tr>
      {titles.map(title => <th key={title}>{title}</th>)}
    </tr>
  </thead>
);

TableHeader.propTypes = {
  titles: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default TableHeader;
