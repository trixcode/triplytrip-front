export const initialState = {
  token: {
    token: '',
  },
  isLogined: false,
  user: {},
};

export const getState = (state = initialState) => state || initialState;
