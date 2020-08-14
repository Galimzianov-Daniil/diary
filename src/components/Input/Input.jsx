import { Field } from "redux-form";
import React, { useState } from "react";
import "./Input.scss";

const Input = ({ customPlaceholder, extClasses, ...props }) => {

    const [inputValue, setValue] = useState("")

    const onChange = ({ target }) => {
        setValue(target.value);
    }

    return (
        <label className={"Input " + extClasses}>
            <Field onChange={onChange} value={inputValue} className="Input__field" component="input" {...props} />
            <div className={"Input__placeholder " + (inputValue && "Input__placeholder_fixed") }>{customPlaceholder}</div>
        </label>
    )

}

export default Input;