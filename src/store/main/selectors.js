export const initialState = {
  topDestinations: [],
  categories: [],
  cities: [],
};

export const getState = (state = initialState) => state || initialState;