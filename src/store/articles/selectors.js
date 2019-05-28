export const initialState = {
  articleList: [],
  articleDetail: {
    tags: []
  },
};

export const getState = (state = initialState) => state || initialState;