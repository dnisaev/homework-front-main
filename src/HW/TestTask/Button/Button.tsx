import React from "react";
import styles from './Button.module.css';

type ButtonPropsType = {
    name: string
    onChange: () => void
    isActive: boolean
}

export const Button = ({name, onChange, isActive}: ButtonPropsType) => {

    const isButtonWork = () => {
        return isActive ? undefined : onChange
    }

    return (
        <button className={isActive ? styles.buttonStop : styles.button}
                onClick={isButtonWork()}>
            <span>
                {name}
            </span>
        </button>
    )
}