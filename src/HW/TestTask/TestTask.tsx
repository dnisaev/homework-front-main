import React, {useState} from 'react';
import styles from './TestTask.module.css';
import {Button} from "./Button/Button";


export const TestTask = () => {

    let [sum, setSum] = useState<number>(0);

    const doPlus = () => setSum(sum += 1);
    const doReset = () => setSum(0);

    const isSumMoreThenTwo = sum > 2;
    const isSumLessThenTwo = sum < 1;

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.counterMain}>
                <div className={styles.counterSum}>
                    <span className={isSumMoreThenTwo ? styles.counterSumStop : ''}>
                        {sum}
                    </span>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button name={'plus'}
                            onChange={doPlus}
                            isActive={isSumMoreThenTwo}/>
                    <Button name={'reset'}
                            onChange={doReset}
                            isActive={isSumLessThenTwo}/>
                </div>
            </div>
        </div>
    );
};