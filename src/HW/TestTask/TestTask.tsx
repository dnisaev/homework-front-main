import React, {useState} from 'react';
import s from './TestTask.module.css';
import {Button} from "./Button/Button";


export const TestTask = () => {

    let [sum, setSum] = useState<number>(0);

    const inc = () => setSum(sum += 1);
    const reset = () => setSum(0);

    const isPlusActive = sum > 5;
    const isResetActive = sum < 1;

    const isPlusWork = sum > 5;
    const isResetWork = sum < 1;

    return (
        <div className={s.mainWrapper}>
            <div className={s.counterMain}>
                <div className={s.counterSum}>
                    <span className={isPlusActive ? s.counterSumStop : ''}>
                        {sum}
                    </span>
                </div>
                <div className={s.buttonWrapper}>
                    <Button name={'plus'}
                            onChange={inc}
                            isActive={isPlusActive}
                            isWork={isPlusWork}/>
                    <Button name={'reset'}
                            onChange={reset}
                            isActive={isResetActive}
                            isWork={isResetWork}/>
                </div>
            </div>
        </div>
    );
};