import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";
import { connect } from "react-redux";
import { signInUser } from "../../redux/reducers/appReducer";
import "./LoginPage.scss";

const LoginPage = ({ signInUser, userInfo }) => {

    if (userInfo) return <Redirect to="/timetable" />

    return (
        <div className="LoginPage">
            <LoginForm onSubmit={signInUser}/>
        </div>
    )

}

const mapStateToProps = state => ({
    userInfo: state.app.userInfo
})

export default connect(mapStateToProps, { signInUser })(LoginPage);