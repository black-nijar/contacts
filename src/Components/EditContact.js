import React, { Component } from "react";
import { connect } from "react-redux";
import { updateContact } from '../actions/actions';

class EditContact extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newName = this.getName.value;
    const newEmail = this.getEmail.value;
    const newPhoneNumber = this.getPhoneNumber.value;
    const contact = {
      newName,
      newEmail,
      newPhoneNumber
    };
    this.props.updateContact(this.props.contact.id, contact);
  };
  render() {
    return (
      <div className='container'>
       <form className="form" onSubmit={this.handleEdit}>
          <div className="form-group">
            <label>Enter Name :</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Name"
              defaultValue={this.props.contact.name}
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
              defaultValue={this.props.contact.email}
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
              defaultValue={this.props.contact.phoneNumber}
              ref={(input) => this.getPhoneNumber = input}
              required
            />
          </div>
          <button className="btn btn-primary">Update Contact</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { updateContact })(EditContact);
