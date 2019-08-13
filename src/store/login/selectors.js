export const initialState = {
  token: {
    token: '',
  },
};

export const getState = (state = initialState) => state || initialState;
