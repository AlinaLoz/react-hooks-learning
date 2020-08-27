import React, { useState } from 'react';
import useInterval from "../use-interval";

const Counter = () => {
    let [count, setCount] = useState(0);

    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, 1000);

    return <h1>{count}</h1>;
}

export default Counter;