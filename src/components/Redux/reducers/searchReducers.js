import { SEARCH } from "../actions/searchAction";

const initialState = {
  contents: [{name: "Nasi Goreng"}, {name: "Mie Goreng"}, {name: "Nasi Pecel"}],
  value: "",
  suggestions: []
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      const { value } = action;
      let suggestions;
      value === ""
        ? (suggestions = [])
        : (suggestions = state.contents.filter(val =>
            val.name.toLocaleLowerCase().includes(value)
          ));
      console.log(suggestions);
      return { ...state, value, suggestions };
    default:
      return state;
  }
};
