import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const pressStart = () => {
        setInProgress(true);
        setAttempts(attempts - 1);
    };
    return (
        <div>
            <Button
                onClick={pressStart}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <span>Attempts: {attempts}</span>
        </div>
    );
}
