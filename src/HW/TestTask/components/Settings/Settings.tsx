import {Button} from "../Button/Button";
import {ChangeEvent} from "react";
import styles from './Settings.module.css';

type SettingsPropsType = {
    settingsButtonIsDisable: boolean
    settingsMaxValue: number
    settingsMinValue: number
    onChangeSettingsMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeSettingsMinValue: (event: ChangeEvent<HTMLInputElement>) => void
    newSettingsForCounter: () => void
};

export const Settings = ({
                             settingsButtonIsDisable,
                             settingsMaxValue,
                             settingsMinValue,
                             onChangeSettingsMaxValue,
                             onChangeSettingsMinValue,
                             newSettingsForCounter
                         }: SettingsPropsType) => {
    return (
        <div>
            <div className={styles.counterMain}>
                <div className={styles.settingsSum}>
                    <div>
                        <span>max value:</span>
                        <input value={settingsMaxValue} type={'number'} onChange={onChangeSettingsMaxValue}/>
                    </div>
                    <div>
                        <span>min value:</span>
                        <input value={settingsMinValue} type={'number'} onChange={onChangeSettingsMinValue}/>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button title={'set'} isDisable={settingsButtonIsDisable} onClick={newSettingsForCounter}/>
                </div>
            </div>
        </div>
    );
};