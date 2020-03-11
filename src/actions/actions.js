import { CREATE_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./types"

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