import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/reducers/appReducer";
import "./Button.scss";
import { completeTask } from "../../redux/reducers/tasksReducer";

const Button = ({ children, ...props }) => <button {...props} className="Button">{ children }</button>

const LogOutButtonTemplate = ({ logOut }) => (
    <button className="Button" onClick={logOut}>Выйти</button>
)

export const LogOutButton = connect(null, { logOut })(LogOutButtonTemplate)

const ButtonDoneTemplate = ({ completeTask, taskKey, uid }) => (
    <Button onClick={() => completeTask(taskKey, uid)}>done!</Button>
)

const mapStateToProps = state => ({
    uid: state.app.userInfo.uid
})

export const ButtonDone = connect(mapStateToProps, { completeTask })(ButtonDoneTemplate)

export default Button;