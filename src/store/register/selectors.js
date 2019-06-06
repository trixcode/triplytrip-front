export const initialState = {
  register : {},
  login: {},
};

export const getState = (state = initialState) => state || initialState;