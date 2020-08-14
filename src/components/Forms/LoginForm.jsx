import React from "react";
import { reduxForm } from "redux-form";
import Input from "../Input/Input";
import './Form.scss';
import icon from "../../img/icon-login.svg"
import { NavLink } from "react-router-dom";

const LoginFormTemplate = ({ handleSubmit }) => (
    <form onSubmit={ handleSubmit } className="Form">

        <div className="Form__icon">
            <img src={icon} alt="Иконка входа"/>
        </div>

        <div className="Form__title">Вход</div>

        <Input customPlaceholder="Адрес эл. почты" name="email" type="text" extClasses="Form__input" />
        <Input customPlaceholder="Пароль" name="password" type="password" extClasses="Form__input"/>

        <div className="Form__button-group">
            <button className="Form__button" type="submit">Войти</button>
            <NavLink to="/reg" className="Form__button Form__button_second">
                Регистрация
            </NavLink>
        </div>


    </form>
)

const LoginReduxForm = reduxForm({ form: "loginForm" })(LoginFormTemplate)


export default LoginReduxForm;


