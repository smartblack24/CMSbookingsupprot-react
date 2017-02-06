import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LocalForm, Control } from 'react-redux-form';
import AlertContainer from 'react-alert';
import * as actions from '../actions';

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

  handleUpdate(form) {
    if(form.total_slots === undefined)
      return;
    const total_slots = parseInt(form.total_slots.value,10);
    if(!form.total_slots.valid && total_slots < 1){
      alert('slots should be positive.')
    }

  }
  handleButtonClose() {
      this.props.closeModal();
  }

  handleSubmit(values) {
    const { addLicense, params } = this.props;
    const license = {...values};
    license['total_slots'] = parseInt(license['total_slots'],10);
    license['bundle'] = params.bundleId;
    addLicense(license)
      .then(() => this.showAlert());
   }

   render() {
     return (
       <div className="modal-body ">
         <AlertContainer ref={(a) => this.msg = a} {...this.alertOptions} />
         <div className="title">
           New License
         </div>
         <div className="description">
           License content
         </div>
         <div
           className="close-modal"
           onClick={ () => this.handleButtonClose()}
           >
           x
         </div>
         <LocalForm
           onSubmit={(values) => this.handleSubmit(values)}
           onUpdate={(form) => this.handleUpdate(form)}
         >
           <div className="input-group">
             <label htmlFor="holder">Holder</label>
             <Control.text
                model=".holder"
                required
              />
           </div>
           <div className="input-group">
             <label htmlFor="book_code">BookCode</label>
             <Control.text
               model=".book_code"
               required
               />
           </div>
           <div className="input-group">
             <label htmlFor="edu_contact">Edu Contact</label>
             <Control.text
               model=".edu_contact"
               required
             />
           </div>
           <div className="input-group">
             <label htmlFor="country">Admin Contact</label>
             <Control.text
               model=".adm_contact"
               required
             />
           </div>
           <div className="input-group last-input-group">
             <label htmlFor="total_slots">Slots</label>
             <Control
               type="number"
               model=".total_slots"
               validators={{
                   positive: (val) => val > 0 ,
                 }}
               required
             />
           </div>
           <div className="input-group last-input-group">
             <label htmlFor="exp_data">Expiration Date</label>
             <Control
               type="date"
               model=".exp_data"
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

LicenseForm = withRouter(connect(
  null,
  actions
)(LicenseForm));

export default LicenseForm;
