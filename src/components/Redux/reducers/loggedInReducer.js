const GET_MENU_TO_SEARCH = "GET_MENU_TO_SEARCH";
const SEARCH = "SEARCH";

const initialState = {
  contents: [],
  value: "",
  suggestions: {
    message: "",
    data: []
  }
};

const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      const { value } = action;
      let suggestions;
      value === ""
        ? (suggestions = [])
        : (suggestions = state.contents.filter(val =>
            val.name.toLocaleLowerCase().includes(value)
          ));
      return { ...state, value, suggestions };
      
    case GET_MENU_TO_SEARCH:
      return {
        ...state,
        suggestions: action.payload,
      };
    default:
      return state;
  }
};

export default loggedInReducer;
