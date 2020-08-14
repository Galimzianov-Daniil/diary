import React, { useState } from "react";
import "./TaskCard.scss";

import { connect } from "react-redux";
import { updateTask } from "../../redux/reducers/tasksReducer";

import TaskControlButtons from "../TaskControlButtons/TaskControlButtons";


const TaskCard = ({ title, time, date, taskKey, uid, updateTask, showDate = false, className }) => {

    const [state, setState] = useState({
        title: title,
        date: date,
        time: time,
        isFormOpen: false
    })

    const formRef = React.createRef()

    const toggleForm = () => {
        const isFormOpen = state.isFormOpen;
        const form = formRef.current;

        if (isFormOpen) {
            form.style.height = 0;
        } else {
            form.style.height = form.scrollHeight + "px";
        }

        setState({
            ...state,
            title: title,
            date: date,
            time: time,
            isFormOpen: !isFormOpen
        });
    }

    const onInput = event => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]:  value })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        updateTask(state, taskKey, uid)
    }

    return (

        <div className={"TaskCard " + (time || showDate ? "" : "TaskCard_filledBG ") + className}>

            <div className="TaskCard__header">

                {
                    !(showDate && date) &&
                    <TaskControlButtons uid={uid} taskKey={taskKey}
                                        toggleForm={toggleForm} isFormOpen={state.isFormOpen}/>
                }

                <div className="TaskCard__title" title="Короткое название задачи">{time && time + " - "} {title} </div>

            </div>

            {
                showDate && date &&
                    <div className="TaskCard__DateWrap">

                        <TaskControlButtons uid={uid} taskKey={taskKey}
                                            toggleForm={toggleForm} isFormOpen={state.isFormOpen}/>

                        <div className="TaskCard__date">
                            { date }{ time && (", " + time) }
                        </div>
                    </div>

            }

            <div className="TaskCard__formWrap" ref={formRef}>

                <form className="TaskCard__form" onSubmit={onSubmit}>

                    <textarea className="TaskCard__textArea TaskCard__field" rows="3" name="title" value={state.title} onChange={onInput} />
                    <input className="TaskCard__field TaskCard__input" value={state.date} onChange={onInput} name="date" type="text" />
                    <input className="TaskCard__field TaskCard__input" value={state.time} onChange={onInput} name="time" type="text" />
                    <button type="submit">Сохранить</button>

                </form>

            </div>

        </div>
    )

}

const mapStateToProps = state => ({
    uid: state.app.userInfo.uid
})

export default connect(mapStateToProps, { updateTask })(TaskCard);