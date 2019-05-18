const initialState = {
  recipe: [],
  isLoading: false,
  error: null
};

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECIPE_BEGIN":
      return {
        ...state,
        isLoading: true
      };

    case "GET_RECIPE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        recipe: action.payload
      };

    case "GET_RECIPE_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default recipe;
