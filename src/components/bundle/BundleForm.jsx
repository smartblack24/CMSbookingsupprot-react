import React from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';
import AlertContainer from 'react-alert';
import * as actions from '../../actions';

/*eslint-disable no-unused-vars */

const positive = val => val && val >= 0;

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
    bundle.distribution = [];
    for (const property in bundle.licenses) {
      if (bundle.licenses.hasOwnProperty(property)) {
        bundle.distribution.push({
           genre: property,
           licenses: parseInt(bundle.licenses[property], 10),
         });
      }
    }
    delete bundle.licenses;
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
          <div className="description">
            Number of licenses
          </div>
          <div className="input-group">
            <label htmlFor="licenses">Sea</label>
            <Control
              type="number"
              min="0"
              model=".licenses.sea"
              required
              validators={{ positive }}
              />
          </div>
          <div className="input-group">
            <label htmlFor="licenses">Jungle</label>
            <Control
              type="number"
              min="0"
              model=".licenses.jun"
              required
              validators={{ positive }}
              />
          </div>
          <div className="input-group">
            <label htmlFor="licenses">Savannah</label>
            <Control
              type="number"
              min="0"
              model=".licenses.sav"
              required
              validators={{ positive }}
              />
          </div>
          <div className="input-group">
            <label htmlFor="licenses">Farm</label>
            <Control
              type="number"
              min="0"
              model=".licenses.far"
              required
              validators={{ positive }}
              />
          </div>
          <div className="input-group">
            <label htmlFor="licenses">Forest</label>
            <Control
              type="number"
              min="0"
              model=".licenses.for"
              required
              validators={{ positive }}
              />
          </div>
          <div className="input-group">
            <label htmlFor="licenses">Dinosours</label>
            <Control
              type="number"
              min="0"
              model=".licenses.din"
              required
              validators={{ positive }}
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
