import styles from './Settings.module.css';
import {Button} from "../Button/Button";
import {ChangeEvent} from "react";

type SettingsPropsType = {
    buttonIsDisable: boolean
    maxValue: number
    minValue: number
    onChangeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeMinValue: (event: ChangeEvent<HTMLInputElement>) => void
    doSetValuesForCounter: () => void
};

export const Settings = ({
                             buttonIsDisable,
                             minValue,
                             maxValue,
                             onChangeMaxValue,
                             onChangeMinValue,
                             doSetValuesForCounter
                         }: SettingsPropsType) => {

    return (
        <div>
            <div className={styles.counterMain}>
                <div className={styles.settingsSum}>
                    <div>
                        <span>max value:</span>
                        <input value={maxValue} type={'number'} onChange={onChangeMaxValue}/>
                    </div>
                    <div>
                        <span>min value:</span>
                        <input value={minValue} type={'number'} onChange={onChangeMinValue}/>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button title={'set'} isActive={buttonIsDisable} onClick={doSetValuesForCounter}/>
                </div>
            </div>
        </div>
    );
};