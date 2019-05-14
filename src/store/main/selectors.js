export const initialState = {
  topDestinations: [],
  articles: [],
};

export const getState = (state = initialState) => state || initialState;