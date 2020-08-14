import React from "react";
import showMoreIcon from "../../img/show-more-icon.svg";
import doneIcon from "../../img/done-icon.svg";
import { connect } from "react-redux";
import { completeTask } from "../../redux/reducers/tasksReducer";
import "./TaskControlButtons.scss";

const TaskControlButtons = ({ isFormOpen, toggleForm, taskKey, uid, completeTask }) => (
    <div className="TaskControlButtons TaskCard__ControlButtons">

        <div className="TaskControlButtons__ControlButtonsWrap">

            <button className={"TaskControlButtons__Button TaskControlButtons__ShowMore " + (isFormOpen ? "TaskControlButtons__ShowMore_open" : "")} onClick={toggleForm}>
                <img src={showMoreIcon} alt="Подробнее"/>
            </button>

            <button className="TaskControlButtons__Button TaskControlButtons__Done" onClick={() => completeTask(taskKey, uid)}>
                <img src={doneIcon} alt="Подробнее"/>
            </button>

        </div>

    </div>
)

export default connect(null, { completeTask })(TaskControlButtons)