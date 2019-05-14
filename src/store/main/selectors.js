export const initialState = {
  topDestinations: [],
  events: [],
  latestNews: [],
};

export const getState = (state = initialState) => state || initialState;