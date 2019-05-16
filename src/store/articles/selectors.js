export const initialState = {
  articleList: [],
  articleDetail: {},
};

export const getState = (state = initialState) => state || initialState;