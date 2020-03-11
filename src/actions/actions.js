import { CREATE_CONTACT } from "./types"

// Create Contact
export const createContact = data => {
  return {
    type: CREATE_CONTACT,
    data
  }
};