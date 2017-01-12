import React from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';
import * as actions from '../actions';

/*eslint-disable no-unused-vars */

const required = (val) => val && val.length > 0;
const length = (val) => val && val.length > 2;

class BundleForm extends React.Component {

  handleSubmit(values) {
    const bundle = Object.assign({}, values);
    bundle['total_licenses'] = parseInt(bundle['total_licenses'],10);
    const { addBundle, onSubmitSuccess } = this.props;
    addBundle(bundle).then(alert('The bundle was created'));
    onSubmitSuccess();
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
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <Control.text
               model=".name"
               required
             />
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
            <label htmlFor="licenses">Licenses</label>
            <Control
              type="number"
              model=".total_licenses"
              required
              />
          </div>
          <div className="input-group">
            <label htmlFor="country">Country</label>
            <Control.text
              model=".country"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <Control.text
              model=".description"
              required
            />
          </div>
          <div className="text-center">
            <button className="button" type="submit">
              Create
            </button>
            <Control.reset model="local" className="button button-clear">
              Clear Values
            </Control.reset>
          </div>
        </LocalForm>
      </div>
    );
  }
}

BundleForm = connect(null, actions)(BundleForm);
export default BundleForm;
