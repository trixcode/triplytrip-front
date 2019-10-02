export const initialState = {
  token: {
    token: '',
  },
  isLogined: false,
  user: {
    roles: {
      name: '',
    },
    username: '',
  },
};

export const getState = (state = initialState) => state || initialState;
