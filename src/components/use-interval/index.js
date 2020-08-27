import {useEffect, useRef} from "react";

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
        console.log('useInterval 1');
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        console.log('useInterval 2');
    }, [delay]);

    console.log('useInterval call');
}

export default useInterval;