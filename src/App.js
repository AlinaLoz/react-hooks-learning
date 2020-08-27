import React, {useState} from 'react';
import TestComponent from "./components/test-components";
import Counter from "./components/counter";

const App = () => {

    return (
        <div>
            <p>App</p>
            <Counter/>
            {/*<p>counter: {counter}</p>*/}
            {/*<button onClick={onStartWrapper}>start</button>*/}
            {/*<button onClick={onStopWrapper}>stop</button>*/}
            <TestComponent/>
        </div>
    );
};

export default App;
