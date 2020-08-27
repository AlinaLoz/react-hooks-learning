import React, {useState} from 'react';
import TestComponent from "./components/test-components";
import Counter from "./components/counter";
import Counter2 from "./components/counter-2";

const App = () => {

    return (
        <div>
            <p>App</p>
            <Counter/>
            <Counter2 initialCount={2} />
            {/*<p>counter: {counter}</p>*/}
            {/*<button onClick={onStartWrapper}>start</button>*/}
            {/*<button onClick={onStopWrapper}>stop</button>*/}
            <TestComponent/>
        </div>
    );
};

export default App;
