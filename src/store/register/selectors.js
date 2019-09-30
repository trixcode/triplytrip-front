export const initialState = {
  token: {
    token: '',
  },
  user: {
    roles: {
      name: '',
    },
    username: '',
  },
};

export const getState = (state = initialState) => state || initialState;
