import { USERS_FETCHED, USER_FETCHED } from "../actions";

const initialState = {
  users: "",
  selectedUser: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCHED: {
      return { ...state, users: action.payload };
    }
    case USER_FETCHED: {
      return { ...state, selectedUser: action.payload };
    }
    default: {
      return state;
    }
  }
}
