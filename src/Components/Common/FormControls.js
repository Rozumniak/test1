import React from "react";
import styles from "./FormControls.module.css";
import {Field} from "redux-form";

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>{props.children}</div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl{...props}><textarea {...input}{...restProps} /></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl{...props}><input {...input}{...restProps}/></FormControl>
}
export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators} component={component}
               {...props}
        /> {text}
    </div>
)