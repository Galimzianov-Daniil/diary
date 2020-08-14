import React from "react";

import "./Timetable.scss";

import { connect } from "react-redux";
import { compose } from "redux";

import DayCard from "../DayCard/DayCard";

const TimetablePage = ({ tasks, week, weekDays, className }) => {

    let currentTasks = tasks.filter(task => week.includes(task.date));
    let tasksDistByDay = {};

    weekDays.forEach((weekDay, weekIdx) => {
        tasksDistByDay[weekDay] = {
            tasks: currentTasks.filter(task => task.date === week[weekIdx]),
            date: week[weekIdx]
        }
    })

    return (
        <div className={"Timetable " + className}>

            { Object.keys(tasksDistByDay).map(weekDay =>
                <DayCard className="Timetable__card"
                         tasks={tasksDistByDay[weekDay].tasks}
                         weekDay={weekDay}
                         date={tasksDistByDay[weekDay].date}
                         key={weekDay}/>)
            }

        </div>
    )
}

const mapStateToProps = state => ({
    tasks: state.tasks.tasks,
    week: state.app.displayWeek,
    weekDays: state.app.weekDays
})

export default compose(
    connect(mapStateToProps)
)(TimetablePage);