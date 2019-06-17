export const initialState = {
  articleList: [],
  articleDetail: {
    tags: []
  },
  articlePaginate : {
    id: '',
    createdDate: '',
    title: '',
    extraDescription: '',
  },
};

export const getState = (state = initialState) => state || initialState;