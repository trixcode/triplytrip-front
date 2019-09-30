export const initialState = {
  userData: {
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
