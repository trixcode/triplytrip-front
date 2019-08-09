export const initialState = {
  articleList: [],
  articleDetail: {
    tags: [],
  },
  articlePaginate: [],
  footerArticle: [],
};


export const getState = (state = initialState) => state || initialState;
