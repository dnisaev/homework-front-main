import React from 'react';
import styles from './Counter.module.css';
import {Button} from "../Button/Button";

type CounterPropsType = {
    sum: number
    setSum: (sum: number) => void
    minValueForCounter: number
    maxValueForCounter: number
    minValue: number
    maxValue: number
    valuesIsNotCorrect: boolean
}

export const Counter = ({sum, setSum, minValueForCounter, maxValueForCounter, valuesIsNotCorrect}: CounterPropsType) => {

    const doPlus = () => setSum(sum += 1);
    const doReset = () => setSum(minValueForCounter);

    const isSumEqualMaxValueOrLessThenZero = sum < 0 || sum >= maxValueForCounter;
    const isSumLessMinValue = sum < minValueForCounter + 1;

    return (
        <div>
            <div className={styles.counterMain}>
                <div className={styles.counterSum}>
                    <span className={isSumEqualMaxValueOrLessThenZero ? styles.counterSumStop : ''}>
                        {valuesIsNotCorrect ? 'error' : sum}
                    </span>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button title={'plus'}
                            onClick={doPlus}
                            isActive={valuesIsNotCorrect || isSumEqualMaxValueOrLessThenZero}/>
                    <Button title={'reset'}
                            onClick={doReset}
                            isActive={isSumLessMinValue}/>
                </div>
            </div>
        </div>
    );
};