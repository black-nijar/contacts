import React from "react";
import { connect } from "react-redux";
import EditContact from "./EditContact";
import ContactList from "./ContactList";

const List = props => {
  const { contacts } = props;
  return (
    <div >
      {contacts.map((contact) => (
        <div key={contact.id}>
          {contact.isEdit ? (
            <EditContact contact={contact} key={contact.id} />
          ) : (
            <ContactList key={contact.id} contact={contact} />
          )}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};
export default connect(mapStateToProps)(List);
