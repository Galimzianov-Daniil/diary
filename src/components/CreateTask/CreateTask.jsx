import React from "react";
import { connect } from "react-redux";
import icon from "../../img/icon-plus.svg";
import { Field, reduxForm } from "redux-form";
import "./CreateTask.scss";
import { createTask } from "../../redux/reducers/tasksReducer";

const CreateTaskTemplate = ({ handleSubmit }) => (
    <form onSubmit={ handleSubmit } className="CreateTask">

        <button className="CreateTask__button" type="submit">
            <img src={icon} alt="Plus"/>
        </button>

        <Field className="CreateTask__field" component="input" name="title" placeholder="Добавить задание"/>
    </form>
)

const CreateTaskRedux = reduxForm({ form: "createTask" })(CreateTaskTemplate)

const CreateTaskContainer = ({ createTask, uid }) => (
    <CreateTaskRedux onSubmit={value => createTask(value, uid)}/>
)

const mapStateToProps = state => ({
    uid: state.app.userInfo.uid
})

export default connect(mapStateToProps, { createTask })(CreateTaskContainer);

