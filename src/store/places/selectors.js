export const initialState = {
    places: [],
    placeDetail: {},
  };
  
  export const getState = (state = initialState) => state || initialState;