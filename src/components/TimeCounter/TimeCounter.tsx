import React from "react";

import "./style.css";

type TimeCounterLayoutProps = {
    time: string;
};

const TimeCounterLayout = ({time}: TimeCounterLayoutProps) => {
    return (
        <main className="mainWrap">
            <h1 className="timeCounter">{time}</h1>
        </main>
    );
};

export default TimeCounterLayout;
