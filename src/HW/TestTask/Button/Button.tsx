import React from "react";
import s from './Button.module.css';

type ButtonPropsType = {
    name: string
    onChange: () => void
    isActive: boolean
    isWork: boolean
}

export const Button = (props: ButtonPropsType) => {

    const isButtonWork = () => {
        return props.isWork ? undefined : props.onChange
    }

    return (
        <button className={props.isActive ? s.buttonStop : s.button}
                onClick={isButtonWork()}>
            <span>
                {props.name}
            </span>
        </button>
    )
}