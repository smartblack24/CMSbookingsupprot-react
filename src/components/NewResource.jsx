import React from 'react';
import Modal from 'react-modal';
import BundleForm from './BundleForm';
import LicenseForm from '../containers/LicenseForm';

const customStyles = {
  content: {
    width: '60%',
    minWidth: '380px',
    maxWidth: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '4px 20px 8px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 50px 30px -30px rgba(0,0,0,0.3)',
  },
};

class NewBundle extends React.Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { resource } = this.props;
    let Form = undefined;
    switch (resource) {
      case 'bundle':
         Form = <BundleForm closeModal={  this.closeModal } />;
        break;
      case 'license':
        Form = <LicenseForm closeModal={  this.closeModal } />;
        break;
      default:
        Form = <BundleForm closeModal={  this.closeModal } />
    }
    return (
      <div>
        <button
          className="btn btn-success"
          onClick={this.openModal}
        >
        {`new ${resource}`}
        </button>
        <Modal
          contentLabel={`New ${resource}`}
          style={customStyles}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          { Form }
        </Modal>
      </div>
    );
  }
}

export default NewBundle;
