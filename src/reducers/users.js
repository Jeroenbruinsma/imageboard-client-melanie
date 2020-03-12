import { USERS_FETCHED } from "../actions";

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCHED: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
