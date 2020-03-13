import { ALL_IMAGES, NEW_IMAGE, IMAGE_DELETED } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_IMAGES: {
      return action.payload;
    }
    case NEW_IMAGE: {
      return [action.payload, ...state];
    }
    case IMAGE_DELETED: {
      const newState = [...state];
      const images = newState.filter(image => image !== action.payload);
      return images;
    }

    default:
      return state;
  }
}
