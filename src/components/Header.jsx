import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import * as actions from '../actions';
import NewResource from '../components/NewResource';
import SearchFilter from '../containers/SearchFilter';

class Header extends React.Component {
  render() {
    const { location, logout, params} = this.props;
    let newResource = "";
    let breadcrumbs = <Link to="bundles">Bundles</Link>;
    if(location.pathname === '/bundles' ||
      location.pathname === 'bundles') {
       newResource = <NewResource resource={'bundle'}/>;
    }

    if(params.bundleId){
       breadcrumbs = <div>
            <Link to="bundles">Bundles</Link>
            {" > "}
            <Link to={`/bundles/${params.bundleId}`}>{params.bundleId}</Link>
          </div>;
    }
    return (
      <div className="container-fluid header">
        <div className="col-xs-12 breadcrumbs">
          {breadcrumbs}
          <Link
            className="logout"
            onClick={logout}
            to="/">
            logout
          </Link>
        </div>
        <div className="col-xs-6 new-bundle-container">
          {newResource}
        </div>
        <div className="col-xs-6">
          <SearchFilter />
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (state, { params }) => {
   return {
     params,
   }
};

Header = withRouter(connect(
  mapStoreToProps,
  actions
)(Header))

export default Header;
