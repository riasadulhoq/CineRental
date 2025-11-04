export const initialState = {
  moviesInCart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        moviesInCart: [...state.moviesInCart, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        moviesInCart: state.moviesInCart.filter(
          (movie) => movie.id != action.payload.id
        ),
      };

    default:
      return state;
  }
};
