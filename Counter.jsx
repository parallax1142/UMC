import React, { useState } from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1);
    };

    const decrease = () => {
        setNumber(num - 1);
    };
    
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
};

export default Counter;