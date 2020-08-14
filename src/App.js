import React, {useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initApp } from "./redux/reducers/appReducer";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

import MainPage from "./pages/MainPage/MainPage";



const App = ({ initApp, isInitialized }) => {

    useEffect(() => {
        console.log("Init app call")
        initApp();

        // eslint-disable-next-line
    }, [])

    if (!isInitialized) return <h1>Loading...</h1>

    return (
        <div className="App">
            <BrowserRouter>
                    <Switch>
                        <Route path="/" exact render={() => <MainPage/>} />
                        <Route path="/login" exact render={() => <LoginPage/>} />
                        <Route path="/reg" exact render={() => <RegistrationPage/>} />
                    </Switch>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = state => ({
    isInitialized: state.app.isInitialized
})

export default connect(mapStateToProps, { initApp })(App);
