import React from 'react';
import { LocalForm, Control } from 'react-redux-form';

class BundleForm extends React.Component {
  handleChange(values) {
    return;
   }
  handleUpdate(form) {
    return;
   }
  handleSubmit(values) {
    console.log('submit',values);
   }
  render() {
    return (
      <div className="modal-body ">
        <div className="title">
          New Bundle
        </div>
        <div className="description">
          Bundle content
        </div>
        <LocalForm
          onUpdate={(form) => this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <Control.text model=".name" />
          </div>
          <div className="input-group">
            <label htmlFor="bundle_type">Bundle Type</label>
              <Control.select model=".bundle_type">
                <option value="Full">Full</option>
                <option value="Custom">Custom</option>
              </Control.select>
          </div>
          <div className="input-group">
            <label htmlFor="country">Country</label>
            <Control.text model=".country" />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <Control.text model=".description" />
          </div>
          <div className="text-center">
            <button className="button" type="submit">
              Create
            </button>
          </div>
        </LocalForm>
      </div>
    );
  }
}

export default BundleForm;
