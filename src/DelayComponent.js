import React from 'react'
import { useState, useMemo } from 'react'
import Increment1 from './Increment1';
import Increment2 from './Increment2';

export default function DelayComponent() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const delay = useMemo(() => expensiveCalculation(), [count1]);

    const fun1 = () => {
        setCount1(count => count + 1);
    }
    const fun2 = () => {
        setCount2(count => count + 1);
    }
    return (
        <div>
            <Increment1 clickHandler={fun1} />
            <p>{count1} <span>{count1%2 === 0 ? 'even' : 'odd'}</span></p>
            <Increment2 clickHandler={fun2} />
            <p>{count2} <span>{count2%2 === 0 ? 'even' : 'odd'}</span></p>
        </div>
    )
}

const expensiveCalculation = () => {
    for (let i = 0; i < 2000000000; i++);
}