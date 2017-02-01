import React from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';
import AlertContainer from 'react-alert';
import * as actions from '../../actions';

/*eslint-disable no-unused-vars */

const required = (val) => val && val.length > 0;
const length = (val) => val && val.length > 2;

class BundleForm extends React.Component {

  constructor(props) {
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'top left',
      theme: 'dark',
      time: 2000,
      transition: 'scale'
    };
  }

  handleButtonClose() {
      this.props.closeModal();
  }

  showAlert() {
    this.msg.show('Bundle created!', {
      type: 'success',
    });
  }

  handleSubmit(values) {
    const bundle = {...values};
    bundle['total_licenses'] = parseInt(bundle['total_licenses'],10);
    const { addBundle, closeModal } = this.props;

    addBundle(bundle)
      .then(() => this.showAlert());

   }

  render() {
    return (
      <div className="modal-body ">
        <AlertContainer ref={(a) => this.msg = a} {...this.alertOptions} />
        <div className="title">
          New Bundle
        </div>
        <div className="description">
          Bundle content
        </div>
        <div
          className="close-modal"
          onClick={ () => this.handleButtonClose()}
          >
          x
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
            <label htmlFor="country">Language</label>
            <Control.text
              model=".language"
              required
            />
          </div>
          <div className="input-group last-input-group">
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
