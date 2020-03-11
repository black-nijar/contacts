import { CREATE_CONTACT } from "../actions/types";

const initState = []
const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return [
        ...state,
        action.data
      ]
    default:
      return state;
  }
};

export default contactReducer;