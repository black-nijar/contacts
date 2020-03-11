import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../actions/actions";

class ContactForm extends Component {

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
    this.getEmail.value = '';
    this.getName.value = '';
    this.getPhoneNumber.value = '';
  };
  render () {
  return (
    <div>
      <h2 className="welcome">Welcome</h2>
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Enter Name :</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Name"
            ref={(input) => this.getName = input}
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Email Id :</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter Email"
            ref={(input) => this.getEmail = input}
            required
          />
        </div>
        <div className="form-group">
          <label>Enter phone number :</label>
          <input
            className="form-control"
            type="number"
            placeholder="Enter Phone Number"
            ref={(input) => this.getPhoneNumber = input}
            required
          />
        </div>
        <button className="btn btn-primary">Add Contact</button>
      </form>
    </div>
  );
  }
};

const mapStateToProps = state => {
  return {
    contacts: state
  };
};

export default connect(mapStateToProps, { createContact })(ContactForm);