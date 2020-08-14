import React from "react";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import { connect } from "react-redux";
import { createUser } from "../../redux/reducers/appReducer";
import "./RegistrationPage.scss"
import {Redirect} from "react-router-dom";

const RegistrationPage = ({ createUser, userInfo }) => {

    if (userInfo) return <Redirect to="/timetable" />

    return (
        <div className="RegistrationPage">
            <RegistrationForm onSubmit={createUser}/>
        </div>
    )

}

const mapStateToProps = state => ({
    userInfo: state.app.userInfo
})

export default connect(mapStateToProps, { createUser })(RegistrationPage);