import React, {useState} from "react";

// const helpSomeFunc = ;

function Counter() {
    const [count, setCount] = useState(() => {
        console.log('helpSomeFunc');
        return 1;
    });

    console.log('render');

    return (
        <div>
            Счёт: {count}
            <button onClick={() => setCount(0)}>Сбросить</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Counter;