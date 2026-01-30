import * as actionTypes from "./action-types";

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const fetchPostData = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_POST_DATA,
      payload: data
    });
  };
};
    
