import React from "react";
import "./DayCard.scss";
import Task from "../TaskCard/TaskCard";

const DayCard = ({ tasks, weekDay, date, className}) => {

    return (
        <div className={"DayCard " + className}>

            <div className="DayCard__info">

                <div className="DayCard__WeekDay">
                    { weekDay }
                </div>

                <div className="DayCard__date">{ date }</div>

            </div>

            <div className="DayCard__tasks">

                { tasks && tasks.map(task => (
                    <div className="DayCard__task" key={task.id}>
                        <Task
                            title={task.title}
                            time={task.time}
                            date={task.date}
                            taskKey={task.id}
                        />
                    </div>
                )) }

            </div>

        </div>
    )

}




export default DayCard;
