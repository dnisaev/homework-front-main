import React from "react";
import styles from './Button.module.css';

type ButtonPropsType = {
    title: string
    isActive: boolean
    onClick: () => void
};

export const Button = ({title, isActive, onClick}: ButtonPropsType) => {
    return (
        <button className={isActive ? styles.buttonStop : styles.button}
                onClick={isActive ? undefined : onClick}>
            <span>
                {title}
            </span>
        </button>
    );
};