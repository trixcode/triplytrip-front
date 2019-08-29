export const initialState = {
  userData: {
    token: '',
  },
};

export const getState = (state = initialState) => state || initialState;
