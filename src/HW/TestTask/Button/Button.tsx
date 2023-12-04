import React from "react";
import styles from './Button.module.css';

type ButtonPropsType = {
    name: string
    onChange: () => void
    isActive: boolean
}

export const Button = ({name, onChange, isActive}: ButtonPropsType) => {

    return (
        <button className={isActive ? styles.buttonStop : styles.button}
                onClick={isActive ? undefined : onChange}>
            <span>
                {name}
            </span>
        </button>
    )
}