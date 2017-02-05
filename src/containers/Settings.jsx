import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import SerialsForm from './SerialsForm';

const style = {
  backgroundColor: '#3F51B5',
}

const Settings = () => (
  <Paper className="settings">
    <Tabs >
      <Tab label="Statistics"
        style={style}>
        <div>
          <h2 className="text-center"> Statistics </h2>
        </div>
      </Tab>
      <Tab label="Serials & Backups"
        style={style}>
        <SerialsForm />
      </Tab>
    </Tabs>
  </Paper>
);

export default Settings;
