import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  UPDATE_CONTACT
} from "../actions/types";

const initState = [];
const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return [...state, action.data];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.id);
    case EDIT_CONTACT:
      return state.map(contact =>
        contact.id === action.id ? { ...contact, isEdit: true } : contact
      );
    case UPDATE_CONTACT:
      return state.map(contact =>
        contact.id === action.id
          ? {
              ...contact,
              isEdit: false,
              name: action.contact.newName,
              email: action.contact.newEmail,
              phoneNumber: action.contact.newPhoneNumber
            }
          : contact
      );
    default:
      return state;
  }
};

export default contactReducer;
