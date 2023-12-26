import React, {ChangeEvent, useState} from 'react';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";
import styles from './Main.module.css';

export const Main = () => {

    const [maxValue, setMaxValue] = useState(1);
    const [minValue, setMinValue] = useState(0);

    const [maxValueForCounter, setMaxValueForCounter] = useState(maxValue);
    const [minValueForCounter, setMinValueForCounter] = useState(minValue);

    const [sum, setSum] = useState(minValue);

    const [buttonIsDisable, setButtonIsDisable] = useState(true);

    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.currentTarget.value) <= 0 || Number(event.currentTarget.value) <= minValue) {
            setButtonIsDisable(true)
            setMaxValue(Number(event.currentTarget.value))
        } else {
            setButtonIsDisable(false)
            setMaxValue(Number(event.currentTarget.value))
        }
    };

    const onChangeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.currentTarget.value) <= 0 || Number(event.currentTarget.value) >= maxValue) {
            setButtonIsDisable(true)
            setMinValue(Number(event.currentTarget.value))
        } else {
            setButtonIsDisable(false)
            setMinValue(Number(event.currentTarget.value))
        }
    };

    const doSetValuesForCounter = () => {
        setSum(minValue)
        setMaxValueForCounter(maxValue)
        setMinValueForCounter(minValue)
        setButtonIsDisable(true)
    };

    const valuesIsNotCorrect = () => {
        return minValue < 0 || maxValue < 0 || minValue >= maxValue
    };

    return (
        <div className={styles.mainWrapper}>
            <Settings buttonIsDisable={buttonIsDisable}
                      minValue={minValue}
                      maxValue={maxValue}
                      onChangeMaxValue={onChangeMaxValue}
                      onChangeMinValue={onChangeMinValue}
                      doSetValuesForCounter={doSetValuesForCounter}/>
            <Counter minValue={minValue}
                     maxValue={maxValue}
                     sum={sum}
                     setSum={setSum}
                     minValueForCounter={minValueForCounter}
                     maxValueForCounter={maxValueForCounter}
                     valuesIsNotCorrect={valuesIsNotCorrect()}
            />
        </div>
    );
};