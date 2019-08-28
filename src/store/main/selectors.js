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
};

export const getState = (state = initialState) => state || initialState;
