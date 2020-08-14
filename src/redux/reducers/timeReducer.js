const SET_CURRENT_DAY = "SET_CURRENT_DAY";
const SET_TIME_RANGE = "SET_TIME_RANGE";

const initialState = {
    currentDay: null,
    timeRange: null
}

const handlers = {
    [SET_CURRENT_DAY]: (state, { payload }) => ({
        ...state, currentDay: payload
    }),
    [SET_TIME_RANGE]: (state, { payload }) => ({
        ...state, timeRange: payload
    }),
    DEFAULT: state => state
}

const timeReducer = (state = initialState, action) => (
    handlers[action.type] || handlers.DEFAULT
)

export const setCurrentDay = () => ({
    type: SET_CURRENT_DAY
})

export const setTimeRange = range => ({
    type: SET_TIME_RANGE, payload: range
})

export default timeReducer;