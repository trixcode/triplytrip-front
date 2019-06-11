export const initialState = {
  articleList: [],
  articleDetail: {
    tags: []
  },
  articlePaginate : {},
};

export const getState = (state = initialState) => state || initialState;