import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const SerialsForm = () => (
  <div>
    <h2 className="text-center">Serials</h2>
    <form className="serials-form">
      <div className="input-group">
        <input type="file" accept=".csv, .txt" required/>
         <RaisedButton
           label="Submit"
           primary={true}
           className="form-submit"
           buttonStyle={{
             backgroundColor: "#00C853",
           }}
           />
      </div>
    </form>
  </div>
);

export default SerialsForm;
