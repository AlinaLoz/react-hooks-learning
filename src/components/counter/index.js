import React, { useState } from 'react';
import useInterval from "../use-interval";

const Counter = () => {
    let [count, setCount] = useState(0);

    useInterval(() => {
        console.log('useInterval', count);
        // Your custom logic here
        setCount(count + 1);
    }, 1000);

    console.log('render', count);
    return <h1>{count}</h1>;
}

export default Counter;