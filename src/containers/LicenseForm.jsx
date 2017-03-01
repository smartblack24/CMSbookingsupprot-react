import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LocalForm, Control } from 'react-redux-form';
import AlertContainer from 'react-alert';
import * as actions from '../actions';

const positive = val => val && val >= 0;

class LicenseForm extends React.Component {

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

  showAlert() {
    this.msg.show('License created!', {
      type: 'success',
    });
  }

  handleButtonClose() {
      this.props.closeModal();
  }

  handleSubmit(values) {
    // const { addLicense, params } = this.props;
    // const license = {...values};
    // license['total_slots'] = parseInt(license['total_slots'],10);
    // license['bundle'] = params.bundleId;
    // addLicense(license)
    //   .then(() => this.showAlert());
    this.props.closeModal();
   }

   render() {
     return (
       <div className="modal-body ">
         <AlertContainer ref={(a) => this.msg = a} {...this.alertOptions} />
         <div className="title">
           New License
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

LicenseForm = withRouter(connect(
  null,
  actions
)(LicenseForm));

export default LicenseForm;
