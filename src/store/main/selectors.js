export const initialState = {
  topDestinations: [],
  events: [],
};

export const getState = (state = initialState) => state || initialState;