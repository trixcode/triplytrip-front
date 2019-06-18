export const initialState = {
  register : {},
  login: {},
  isOpenRegisterModal: true,
  isOpenLoginModal: true,
};

export const getState = (state = initialState) => state || initialState;