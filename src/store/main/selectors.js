export const initialState = {
  topDestinations: [],
  articles: [],
  events: [],
};

export const getState = (state = initialState) => state || initialState;