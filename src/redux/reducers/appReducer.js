import Firebase from "../../api/firebase";
import { observeTasks } from "./tasksReducer";

const INIT_APP = "appReducer/INIT_APP";
const SET_USER_DATA = "appReducer/SET_USER_DATA";
const SET_INITIALIZES_STATUS = "appReducer/SET_INITIALIZES_STATUS";
const SET_DISPLAY_WEEK = "appReducer/SET_DISPLAY_WEEK";

const initialState = {
    isInitialized: null,
    displayWeek: null,
    userInfo: null,
    weekDays: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
}

const handlers = {
    [INIT_APP]: (state, { payload }) => ({
        ...state, initialState: payload
    }),
    [SET_USER_DATA]: (state, { payload }) => ({
        ...state, userInfo: payload
    }),
    [SET_INITIALIZES_STATUS]: (state) => ({
        ...state, isInitialized: true
    }),
    [SET_DISPLAY_WEEK]: (state, { displayWeek }) => ({
        ...state, displayWeek
    }),
    DEFAULT: state => state
}

const appReducer = (state= initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export const setUserInfo = userInfo => ({
    type: SET_USER_DATA, payload: userInfo
})

export const setInitializedStatus = () => ({
    type: SET_INITIALIZES_STATUS
})

export const initApp = () => dispatch => {

    const promise = new Promise((resolve) => {
        Firebase.getUserData()
            .then(userInfo => {
                dispatch(setUserInfo(userInfo))
                dispatch(setWeek())
                if (userInfo) {
                    dispatch(observeTasks(userInfo.uid)).then(() => resolve())
                } else {
                    resolve();
                }
            })
            .catch(error => alert(error));
    })

    Promise.all([promise])
        .then(() => dispatch(setInitializedStatus()))
}

export const switchNextWeek = (currentMondayDate) => dispatch => {
    const [ day, month, year ] = currentMondayDate.split("/");
    dispatch(setWeek(new Date(+year, +month - 1, +day + 7)))
}

export const switchPrevWeek = (currentMondayDate) => dispatch => {
    const [ day, month, year ] = currentMondayDate.split("/");
    dispatch(setWeek(new Date(+year, +month - 1, +day - 7)))
}

export const setWeek = (dateObj = new Date()) => dispatch => {

    const weekDay = [6, 0, 1, 2, 3, 4, 5][dateObj.getDay()];
    const startWeekTimestamp = dateObj.getTime() - 86400000 * weekDay;

    dateObj.setTime(startWeekTimestamp)

    const week = [];

    for (let i = 1; i <= 7; i++) {

        week.push(
            dateObj.getDate() + "/" +
            (dateObj.getMonth() + 1) + "/" +
            dateObj.getFullYear()
        )

        dateObj.setTime(startWeekTimestamp + (86400000 * i))
    }

    dispatch(setDisplayWeek(week));
}


export const setDisplayWeek = displayWeek => ({
    type: SET_DISPLAY_WEEK, displayWeek
})

export const createUser = ({ email, password }) => dispatch => {
    Firebase.createUser(email, password)
        .then((userInfo) =>{
            dispatch(setUserInfo(userInfo.user))
            dispatch(observeTasks(userInfo.user.uid))
        })
        .catch((error) => alert(error))
}

export const signInUser = ({ email, password }) => (dispatch) => {
    Firebase.login(email, password)
        .then((userInfo) => {
            dispatch(setUserInfo(userInfo.user))
            dispatch(observeTasks(userInfo.user.uid))
        })
        .catch((error) => alert(error))
}

export const logOut = () => (dispatch) => {
    Firebase.signOut()
        .then(() => dispatch(setUserInfo(null)))
}

export default appReducer;