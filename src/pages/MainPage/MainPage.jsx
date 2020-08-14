import React from "react";
import Timetable from "../../components/Timetable/Timetable";
import withAuthRedirect from "../../helpers/hoc/withAuthRedirect";
import TasksManager from "../../components/TasksManager/TasksManager";
import "./MainPage.scss"
import WeeksNavigation from "../../components/WeeksNavigation/WeeksNavigation";

const MainPage = () => (
    <div className="MainPage">
        {/*.MainPage*/}

        <WeeksNavigation className="MainPage__WeeksNavigation"/>

        <div className="MainPage__container">
            <Timetable className="MainPage__timetable"/>
            <TasksManager className="MainPage__TaskManager"/>
        </div>

    </div>
)

export default withAuthRedirect(MainPage);