import React from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';
import * as actions from '../actions';

const required = (val) => val && val.length > 2;

class BundleForm extends React.Component {
  handleChange(values) {
    return;
   }
  handleUpdate(form) {
    console.log(form.$form);
    if(!form.$form.valid){
      console.log(form.$form.valid);
    }
   }
  handleSubmit(values) {
    const { addBundle } = this.props;
    addBundle(values);
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
              <Control.select
                 defaultValue="Full"
                 model=".bundle_type"
                 className="styled-select slate">
                <option value="Full">Full</option>
                <option value="Custom">Custom</option>
              </Control.select>
          </div>
          <div className="input-group">
            <label htmlFor="country">Country</label>
            <Control.text
              model=".country"
              validators={{ required }} />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <Control.text
              model=".description"
              validators={{ required }} />
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

BundleForm = connect(null, actions)(BundleForm);
export default BundleForm;
