import { CREATE_CONTACT, DELETE_CONTACT, EDIT_CONTACT, UPDATE_CONTACT } from "./types"

// Create Contact
export const createContact = data => {
  return {
    type: CREATE_CONTACT,
    data
  }
};

//Delete Contact 
export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    id
  }
};

//Edit Contact
export const editContact = id => {
  return {
    type: EDIT_CONTACT,
    id
  }
};


//Update Contact
export const updateContact = (id, contact) => {
  return {
    type: UPDATE_CONTACT,
    id,
    contact
  }
};