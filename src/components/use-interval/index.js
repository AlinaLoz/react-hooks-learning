import {useEffect, useRef} from "react";

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
        console.log('useInterval 1111111111111');
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
        console.log('useInterval 2222222222222222');
    }, [delay]);

    console.log('useInterval render');
}

export default useInterval;