import request from "superagent";

export const ALL_IMAGES = "ALL_IMAGES";

const baseUrl = "http://localhost:4000";
// const baseUrl = "https://damp-river-67026.herokuapp.com";

function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

export const NEW_IMAGE = "NEW_IMAGE";

function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}

export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/image`)
    .set(`Authorization`, `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

export const JWT = "JWT";

function loggingIn(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      // console.log("login action", response.body);
      const action = loggingIn(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const CREATE_USER = "CREATE_USER";

function signUp(payload) {
  return {
    type: CREATE_USER,
    payload
  };
}

export const createUser = data => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = signUp(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const USERS_FETCHED = "USERS_FETCHED";

function usersLoaded(payload) {
  return {
    type: USERS_FETCHED,
    payload
  };
}

export const loadUsers = () => (dispatch, getState) => {
  request(`${baseUrl}/user`)
    .then(response => {
      dispatch(usersLoaded(response.body));
    })
    .catch(console.error);
};

export const USER_FETCHED = "USER_FETCHED";

const userFetched = user => {
  // console.log("logging user", user);
  return {
    type: USER_FETCHED,
    payload: user
  };
};

export const loadUser = id => dispatch => {
  request
    .get(`${baseUrl}/user/${id}`)
    .send(id)
    .then(response => {
      // console.log("loadUser", response.body);

      dispatch(userFetched(response.body));
    })
    .catch(console.error);
};
//delete single image
export const IMAGE_DELETED = "IMAGE_DELETED";

const imageDeleted = id => ({
  type: IMAGE_DELETED,
  id
});

export const deleteImage = id => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  console.log("action id", id);
  request
    .delete(`${baseUrl}/image`)
    .set(`Authorization`, `Bearer ${user.jwt}`)
    .send({ id: id })
    .then(response => {
      console.log("response", response.data);
      dispatch(imageDeleted(id));
    })
    .catch(console.error);
};
