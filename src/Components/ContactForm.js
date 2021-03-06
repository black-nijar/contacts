import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../actions/actions";
import Modal from "./Modal";

class ContactForm extends Component {
 state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  // handle Submit
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const email = this.getEmail.value;
    const phoneNumber = this.getPhoneNumber.value;
    const data = {
      id: new Date().getTime(),
      name,
      email,
      phoneNumber,
      isEdit: false
    };
    this.props.createContact(data);
    this.getEmail.value = "";
    this.getName.value = "";
    this.getPhoneNumber.value = "";
    this.hideModal()
  };
  render() {
    return (
      <main>
        <h2 className="welcome">Welcome</h2>
        <Modal show={this.state.show}>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Enter Name :</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Name"
                ref={input => (this.getName = input)}
                required
              />
            </div>
            <div className="form-group">
              <label>Enter Email Id :</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter Email"
                ref={input => (this.getEmail = input)}
                required
              />
            </div>
            <div className="form-group">
              <label>Enter phone number :</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter Phone Number"
                ref={input => (this.getPhoneNumber = input)}
                required
              />
            </div>
            <div className="btn-group">
              <div>
                <button className="btn btn-primary">Add Contact</button>
              </div>
              <div  style={{paddingLeft: 30}}>
                <button type='button' className="btn" onClick={() => this.hideModal()}>Cancel</button>
              </div>
            </div>
          </form>
        </Modal>
        <h2 style={{textAlign: 'center'}}>Click here to Create Contact</h2>
       <div style={{textAlign: 'center'}}>
          <button
            type='button'
            onClick={this.showModal}
            className='btn btn-primary'
          >
           <i className='material-icons'>add</i> Add Contact
          </button>
       </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state
  };
};

export default connect(mapStateToProps, { createContact })(ContactForm);
