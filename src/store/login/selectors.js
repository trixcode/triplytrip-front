export const initialState = {
  token: {
    token: '',
  },
  isLogined: false,
};

export const getState = (state = initialState) => state || initialState;
