import React  from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { getAside } from '../reducers';
import * as actions from '../actions';

let Aside = ({ toggleAside, asideStatus }) => (
  <Drawer open={asideStatus}>
    <MenuItem
      onTouchTap={() => {
        browserHistory.push('/bundles');
        toggleAside();
      }}
      >
      Bundles
    </MenuItem>
    <MenuItem
      onTouchTap={() => browserHistory.push('/bundles')}
      >
      Settings
    </MenuItem>
    <MenuItem
      onClick={toggleAside}
      >Exit</MenuItem>
  </Drawer>
);

const mapStoreToProps = (state) => ({
  asideStatus: getAside(state),
});

Aside = connect(
  mapStoreToProps,
  actions
)(Aside);

export default Aside;
