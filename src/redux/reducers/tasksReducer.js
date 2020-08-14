import Firebase from "../../api/firebase";
const SET_TASKS = "tasksReducer/SET_TASKS";

const initialState = {
    tasks: null,
    taskBeingEdited: null
}

const handlers = {
    [SET_TASKS]: (state, { payload }) => ({
        ...state, tasks: payload
    }),
    DEFAULT: state => state
}

const tasksReducer = (state= initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export const setTasks = tasks  => ({
    type: SET_TASKS, payload: tasks
})

export const createTask = ({ title, time, date }, uid) => () => {
    return Firebase.createTask(title, time, date, uid)
        .catch((error) => console.log(error))
}

export const completeTask = (taskKey, uid) => () => {
    Firebase.completeTask(taskKey, uid);
}

export const observeTasks = (uid) => dispatch => {
    return Firebase.observeTasks(tasks => dispatch(setTasks(tasks)), uid)
}

export const updateTask = ({ title, time, date }, taskKey, uid) => () => {
    return Firebase.updateTask(title, time, date , taskKey, uid)
}

export default tasksReducer;

