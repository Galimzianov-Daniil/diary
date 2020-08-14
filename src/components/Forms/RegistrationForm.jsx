import React from "react";
import { reduxForm } from "redux-form";
import icon from "../../img/security-icon.svg";
import Input from "../Input/Input";
import { NavLink } from "react-router-dom";


const RegistrationFormTemplate = ({ handleSubmit }) => {

    return (
        <form onSubmit={ handleSubmit } className="Form">
            <div className="Form__icon">
                <img src={icon} alt="Иконка входа"/>
            </div>

            <div className="Form__title">Регистрация</div>

            <Input customPlaceholder="Адрес эл. почты" name="email" type="text" extClasses="Form__input" />
            <Input customPlaceholder="Пароль" name="password" type="password" extClasses="Form__input"/>
            <Input customPlaceholder="Повторите пароль" name="repeatPassword" type="password" extClasses="Form__input"/>

            <div className="Form__button-group">
                <button className="Form__button" type="submit">Регистрация</button>
                <NavLink to="/login" className="Form__button Form__button_second">
                    У меня уже есть аккаунт
                </NavLink>
            </div>

        </form>
    )

}

const RegistrationReduxForm = reduxForm({ form: "registrationForm" })(RegistrationFormTemplate)

export default RegistrationReduxForm;
