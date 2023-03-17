import React from "react";

import "./App.css";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChangeType } from "./components/ChangeType";
import { Counter } from "./components/Counter";
import { CycleHoliday } from "./components/CycleHoliday";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
