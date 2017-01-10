import React from 'react';
import NewBundle from '../components/NewBundle';
import SearchFilter from '../containers/SearchFilter';

const Header = () => (
  <div className="container-fluid header">
    <div className="col-xs-12 breadcrumbs">
      <h2>Bundles</h2>
    </div>
    <div className="col-xs-6 new-bundle-container">
      <NewBundle />
    </div>
    <div className="col-xs-6">
      <SearchFilter />
    </div>
  </div>
);

export default Header;
