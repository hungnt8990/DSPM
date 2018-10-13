import * as ActionTypes from '../../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
    loading: false,
    error: null,
    user: null
};


const LoginReducer = (state = defaultState, action) => {
    switch (action.type) {
        // LOGIN
        case ActionTypes.LOGIN_PENDING:
            return { ...state, loading: true };
        case ActionTypes.LOGIN_SUCCESS:
            return { ...state, loading: false, error: null, user: action.user };
        case ActionTypes.LOGIN_ERROR:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}

export default LoginReducer;