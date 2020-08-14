import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./main.scss";
import store from "./redux/store";
import {Provider} from "react-redux";

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
