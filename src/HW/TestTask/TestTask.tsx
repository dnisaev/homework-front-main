import React, {useState} from 'react';
import s from './TestTask.module.css';
import {Button} from "./Button/Button";


export const TestTask = () => {

    let [sum, setSum] = useState<number>(0);

    const inc = () => setSum(sum += 1);
    const reset = () => setSum(0);
    const isNumStop = sum > 5;

    return (
        <div className={s.mainWrapper}>
            <div className={s.counterMain}>
                <div className={s.counterSum}>
                    <span className={isNumStop ? s.counterSumStop : ''}>
                        {sum}
                    </span>
                </div>
                <div className={s.buttonWrapper}>
                    <Button name={'plus'}
                            onChange={inc}
                            isActive={isNumStop}/>
                    <Button name={'reset'}
                            onChange={reset}
                            isActive={!isNumStop}/>
                </div>
            </div>
        </div>
    );
};