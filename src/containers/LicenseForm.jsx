import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { LocalForm, Control } from 'react-redux-form';
import * as actions from '../actions';

class LicenseForm extends React.Component {
  handleButtonClose() {
      this.props.closeModal();
  }

  handleSubmit(values) {
    const { addLicense, closeModal, params } = this.props;
    const license = {...values};
    license['total_slots'] = parseInt(license['total_slots'],10);
    license['bundle'] = params.bundleId;
    addLicense(license).then(()=> console.log('add react-alert'));
    closeModal();
   }

   render() {
     return (
       <div className="modal-body ">
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
             <Control
               type="number"
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
