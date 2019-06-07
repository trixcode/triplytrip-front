export const initialState = {
    places: [],
    placeDetail: {
      user: {
        firstName: ''
      }
    },
  };
  
  export const getState = (state = initialState) => state || initialState;