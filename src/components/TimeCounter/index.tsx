import React, {useState, useEffect} from "react";

import TimeCounterLayout from "./TimeCounter";

const TimeCounter = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    let intervalId = null;
    useEffect(() => {
        intervalId = setInterval(() => updateClock(), 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const updateClock = () => setTime(new Date().toLocaleTimeString());

    return <TimeCounterLayout time={time} />;
};

export default TimeCounter;
