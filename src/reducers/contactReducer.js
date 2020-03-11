import { CREATE_CONTACT, DELETE_CONTACT } from "../actions/types";

const initState = []
const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return [
        ...state,
        action.data
      ]
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.id);
    default:
      return state;
  }
};

export default contactReducer;