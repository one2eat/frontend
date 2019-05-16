import browserStorage from "../browserStorage";

const token = browserStorage.getKey("token") || null;

// this specific user will be retrieved from the backend API /users/:id
const initialState = {
  //////////////////////////////////////////////////////////////////////////////
  // after we're logged in, we will have a JSON Web Token (JWT)
  token: token || null, // a string of JWT

  //////////////////////////////////////////////////////////////////////////////
  // before we're logged in, the auth/admin conditions are false
  // or we can check what's currently in the storage
  isAuthenticated: browserStorage.getKey("isAuthenticated") || false
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    ////////////////////////////////////////////////////////////////////////////
    // SET USER STATE AFTER LOGIN
    case "SET_USER_STATE": {
      return action.payload.user;
      // will set token, name, email, isAuthenticated
      // dispatched in loginUser action creator
    }

    ////////////////////////////////////////////////////////////////////////////
    // REMOVE USER STATE AFTER LOGOUT
    case "REMOVE_USER_STATE": {
      return {};
    }

    ////////////////////////////////////////////////////////////////////////////
    default: {
      return state;
    }
  }
}
