import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

import tasksReducer from "./reducers/tasksReducer";
import timeReducer from "./reducers/timeReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
    tasks: tasksReducer,
    time: timeReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;