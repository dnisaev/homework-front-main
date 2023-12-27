import React, {ChangeEvent, useState} from 'react';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";
import styles from './Main.module.css';

export const Main = () => {

    // Settings

    const [settingsButtonIsDisable, setSettingsButtonIsDisable] = useState(true);
    const [settingsMaxValue, setSettingsMaxValue] = useState(1);
    const [settingsMinValue, setSettingsMinValue] = useState(0);

    const onChangeSettingsMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let currentTargetMaxValue = Number(event.currentTarget.value);
        setSettingsMaxValue(currentTargetMaxValue);
        if (currentTargetMaxValue <= 0 || currentTargetMaxValue <= settingsMinValue || settingsMinValue < 0) {
            setSettingsButtonIsDisable(true)
        } else {
            setSettingsButtonIsDisable(false)
        }
    };
    const onChangeSettingsMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        let currentTargetMinValue = Number(event.currentTarget.value);
        setSettingsMinValue(currentTargetMinValue);
        if (currentTargetMinValue < 0 || currentTargetMinValue >= settingsMaxValue || settingsMaxValue < 0) {
            setSettingsButtonIsDisable(true)
        } else {
            setSettingsButtonIsDisable(false)
        }
    };
    const newSettingsForCounter = () => {
        setCurrentSumCounter(settingsMinValue)
        setMaxValueForCounter(settingsMaxValue)
        setMinValueForCounter(settingsMinValue)
        setSettingsButtonIsDisable(true)
    };

    // Counter

    const [maxValueForCounter, setMaxValueForCounter] = useState(settingsMaxValue);
    const [minValueForCounter, setMinValueForCounter] = useState(settingsMinValue);
    const [currentSumCounter, setCurrentSumCounter] = useState(settingsMinValue);

    const valuesIsNotCorrect = () => {
        return settingsMinValue < 0 || settingsMaxValue < 0 || settingsMinValue >= settingsMaxValue
    };

    return (
        <div className={styles.mainWrapper}>
            <Settings settingsButtonIsDisable={settingsButtonIsDisable}
                      settingsMaxValue={settingsMaxValue}
                      settingsMinValue={settingsMinValue}
                      onChangeSettingsMaxValue={onChangeSettingsMaxValue}
                      onChangeSettingsMinValue={onChangeSettingsMinValue}
                      newSettingsForCounter={newSettingsForCounter}/>
            <Counter currentSumCounter={currentSumCounter}
                     setCurrentSumCounter={setCurrentSumCounter}
                     maxValueForCounter={maxValueForCounter}
                     minValueForCounter={minValueForCounter}
                     valuesIsNotCorrect={valuesIsNotCorrect()}
            />
        </div>
    );
};