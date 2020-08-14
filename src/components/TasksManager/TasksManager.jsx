import React from "react";
import CreateTask from "../CreateTask/CreateTask";
import { connect } from "react-redux";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskManager.scss";

const TasksManager = ({ tasks, className }) => (
    <div className={"TasksManager " + className}>

        <div className="TasksManager__title">Список задач</div>

        <CreateTask/>

        <div className="TasksManager__tasks">

            { tasks.map(task => (
                <TaskCard title={task.title} time={task.time} key={task.id} className={"TasksManager__task"}
                          date={task.date} taskKey={task.id} showDate={true}/>))}

        </div>

    </div>
)

const mapStateToProps = state => ({
    tasks: state.tasks.tasks
})

export default connect(mapStateToProps)(TasksManager)