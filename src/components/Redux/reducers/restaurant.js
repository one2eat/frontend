const initialState = {
  restaurant: [],
  isLoading: false,
  error: null
};

const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESTAURANT_BEGIN":
      return {
        ...state,
        isLoading: true
      };

    case "GET_RESTAURANT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        restaurant: action.payload
      };

    case "GET_RESTAURANT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default restaurant;
