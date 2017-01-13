import React from 'react';
import { Link } from 'react-router';
import NewBundle from '../components/NewBundle';
import SearchFilter from '../containers/SearchFilter';

const Header = () => (
  <div className="container-fluid header">
    <div className="col-xs-12 breadcrumbs">
      <Link to="bundles">Bundles</Link>
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
