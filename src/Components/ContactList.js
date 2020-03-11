import React from "react";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../actions/actions";

const ContactList = props => {
  const { contact } = props;
  return (
    <div className="container">
      <div className="card" style={{ padding: 10 }}>
        <h4>Contact List</h4>
        <h5>Name: {contact.name}</h5>
        <h5>Email Id : {contact.email}</h5>
        <h5>Phone Number : {contact.phoneNumber}</h5>
        <div className="btn-group">
          <div style={{ paddingRight: 20 }}>
            <button
              className="btn btn-info"
              onClick={() => props.editContact(contact.id)}
            >
             <i></i>
            </button>
          </div>
          <div>
            <button
              className="btn btn-danger"
              onClick={() => props.deleteContact(contact.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteContact, editContact })(ContactList);
