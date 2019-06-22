export const initialState = {
  topDestinations: [],
  categories: [],
  cities: [],
  responseStatuses: {
    isSuccess: false,
    isModalOpen: false,
    message: '',
    title: '',
  },
  isLogined: false
};

export const getState = (state = initialState) => state || initialState;