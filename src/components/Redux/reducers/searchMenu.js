const SEARCH = "SEARCH";

const initialState = {
  contents: [],
  value: "",
  suggestions: {
    message: "",
    data: []
  },
  isSearching: false
};

const searchMenu = (state = initialState, action) => {
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
    case "SEARCH_MENU_BEGIN":
      return {
        ...state,
        isSearching: true
      };
    case "SEARCH_MENU_SUCCESS":
      return {
        ...state,
        suggestions: action.payload,
        isSearching: false
      };
    case "CLEAR_MENU":
      return {
        ...state,
        suggestions: {
          message: "",
          data: []
        }
      };
    default:
      return state;
  }
};

export default searchMenu;
