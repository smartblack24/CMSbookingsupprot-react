import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Aside from '../containers/Aside.jsx'
import * as actions from '../actions';
import NewResource from '../components/NewResource';
import SearchFilter from '../containers/SearchFilter';
import { getDetail } from '../reducers';

class Header extends React.Component {

  componentDidMount() {
    if(!localStorage.getItem('token'))
      browserHistory.push('/login');
  }

  render() {
    const { location, logout, params, bundle } = this.props;
    let newResource = "";
    let search = <SearchFilter />
    let breadcrumbs = <Link to="/bundles">Bundles</Link>;
    if(location.pathname === '/bundles' ||
      location.pathname === 'bundles') {
       newResource = <NewResource resource={'Bundle'}/>;
    } else if (params.bundleId) {
      newResource = <NewResource resource={'License'}/>;
    }

    if(location.pathname === '/settings' ||
      location.pathname === 'settings'){
        search = '';
        breadcrumbs = <Link to="/settings">Settings</Link>;
      }


    if(params.bundleId){
       breadcrumbs = <div>
            <Link to="/bundles">Bundles</Link>
            {" > "}
            <Link to={`/bundles/${params.bundleId}`}>{bundle.name}</Link>
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
        <Aside/>
        <AppBar
           style={{
             backgroundColor: "#3F51B5",
             zIndex: 0,
           }}
           className="app-bar"
           title={breadcrumbs}
           iconElementRight={logoutIcon}
           onLeftIconButtonTouchTap={() => this.props.toggleAside()}
           />
         <div className="header-section-2">
           <div className="col-xs-6 new-bundle-container">
             {newResource}
           </div>
           <div className="col-xs-6">
             {search}
           </div>
         </div>
      </div>
    );
  }
}

const mapStoreToProps = (state, { params }) => {
   return {
     params,
     bundle: getDetail(state),
   }
};

Header = withRouter(connect(
  mapStoreToProps,
  actions
)(Header))

export default Header;
