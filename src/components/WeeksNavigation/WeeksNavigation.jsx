import React from "react";
import { connect } from "react-redux";
import { switchNextWeek, switchPrevWeek } from "../../redux/reducers/appReducer";
import "./WeeksNavigation.scss";

const WeeksNavigation = ({ switchNextWeek, displayWeek, switchPrevWeek, className }) => {

    return (
        <div className={"WeeksNavigation " + className}>

            <div className="WeeksNavigation__weekDates">
                {displayWeek[0]} - {displayWeek[6]}
            </div>

            <button className="WeeksNavigation__button" onClick={() => switchPrevWeek(displayWeek[0])}>Назад</button>
            <button className="WeeksNavigation__button" onClick={() => switchNextWeek(displayWeek[0])}>След</button>
        </div>
    )
}

const mapStateToProps = state => ({
    displayWeek: state.app.displayWeek
})

export default connect(mapStateToProps, { switchNextWeek, switchPrevWeek })(WeeksNavigation);

