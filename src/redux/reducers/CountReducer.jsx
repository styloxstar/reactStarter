import * as actionTypes from '../actions/action-types';

const initialState = {
    count: 0,
    posts:[],
};

const CountReducer = (state = initialState, action) => {
    console.log("check_sjhsj", action);
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : 0
            };
        case actionTypes.FETCH_POST_DATA:
            console.log("data", action.payload);
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
};

export default CountReducer;