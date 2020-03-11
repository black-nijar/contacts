import React from 'react'
import { connect } from 'react-redux'
import EditContact from './EditContact';
import ContactList from './ContactList';

const List = (props) => {
  const { contacts } = props;
  const List = contacts.map( contact => {
    return (
      <div key={contact.id}>
        {contact.name}
      </div>
    )
  })
  return (
    <div>
    {List}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}
export default connect(mapStateToProps)(List)
