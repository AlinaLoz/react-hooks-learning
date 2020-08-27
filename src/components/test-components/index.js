import React, { useState, useEffect } from 'react';

const TestComponent = () => {
    const [firstState, setFirstState] = useState(1);

    useEffect(() => {
        console.log('useEffect 1', firstState);
    });

    const [secondState, setSecondState] = useState(2);
    useEffect(() => {
        console.log('useEffect 2', secondState);
    });
    console.log('render');

    return (
        <div>TestComponent</div>
    );
};

export default TestComponent;