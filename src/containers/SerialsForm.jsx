import React from 'react';
import AlertContainer from 'react-alert';
import { addCodes } from '../api/licenses';

class SerialsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {file: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.alertOptions = {
      offset: 14,
      position: 'top left',
      theme: 'dark',
      time: 2000,
      transition: 'scale'
    };
  }

  showAlert() {
    this.msg.show('Codes added', {
      type: 'success',
    });
  }

  handleChange(event) {
    this.setState({file: event.target.files[0]});
  }

  handleSubmit(event) {
     addCodes(this.state.file)
      .then(status => {
        if(status === 201) this.showAlert();
        this.setState({file: ''});
      });
     event.preventDefault();
   }
  render() {
    return (
      <div>
        <AlertContainer ref={(a) => this.msg = a} {...this.alertOptions} />
        <h2 className="text-center">Serials</h2>
        <form className="serials-form"
          onSubmit={this.handleSubmit}
          >
          <div className="input-group">
            <input
              type="file"
              onChange={this.handleChange}
              accept=".csv, .txt"
              required
              />
            <input
              className="submit"
              type="submit"
               />
          </div>
        </form>
      </div>
    );
  }
}

export default SerialsForm;
