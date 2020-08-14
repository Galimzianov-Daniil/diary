// import Firebase from "../../api/firebase";

const USER_LOGGED = "usersReducer/USER_LOGGED";

const initialState = {
    isAuth: null
}

const handlers = {
    [USER_LOGGED]: (state, { payload }) => ({
        ...state, isAuth: payload
    }),
    DEFAULT: state => state
}

const authReducer = (state = initialState, action ) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export const setAuthStatus = status => ({
    type: USER_LOGGED, payload: status
})

export default authReducer;