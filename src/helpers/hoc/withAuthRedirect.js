import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = state => ({
    userInfo: state.app.userInfo
})

const withAuthRedirect = (Component) => {

    const redirectComponent = (props) => {
        if (!props.userInfo) return <Redirect to="/login" />

        return <Component {...props} />
    }

    return connect(mapStateToProps)(redirectComponent)

}

export default withAuthRedirect;