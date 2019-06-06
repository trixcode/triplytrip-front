export const initialState = {
  latestNewsList: [],
  latestDetail: {},
};

export const getState = (state = initialState) => state || initialState;