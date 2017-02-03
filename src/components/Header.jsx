import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import * as actions from '../actions';
import NewResource from '../components/NewResource';
import SearchFilter from '../containers/SearchFilter';

class Header extends React.Component {
  render() {
    const { location, logout, params} = this.props;
    let newResource = "";
    let breadcrumbs = <Link to="/bundles">Bundles</Link>;
    if(location.pathname === '/bundles' ||
      location.pathname === 'bundles') {
       newResource = <NewResource resource={'Bundle'}/>;
    } else if (params.bundleId) {
      newResource = <NewResource resource={'License'}/>;
    }


    if(params.bundleId){
       breadcrumbs = <div>
            <Link to="/bundles">Bundles</Link>
            {" > "}
            <Link to={`/bundles/${params.bundleId}`}>{params.bundleId}</Link>
          </div>;
    }
    const logoutIcon = <Link
                          className="logout"
                          onClick={logout}
                          to="/login">
                            Logout
                        </Link>
    return (
      <div className="header">
        <AppBar
           style={{
             backgroundColor: "#3F51B5",
             zIndex: 0,
           }}
           className="app-bar"
           title={breadcrumbs}
           iconElementRight={logoutIcon}
           iconClassNameRight="logout"
           />
         <div className="header-section-2">
           <div className="col-xs-6 new-bundle-container">
             {newResource}
           </div>
           <div className="col-xs-6">
             <SearchFilter />
           </div>
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
