export const initialState = {
  createListing: {},
  myListing: [],
};

export const getState = (state = initialState) => state || initialState;
