import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("0");

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attemptsForm">
                <Form.Control
                    type="number"
                    onChange={(e) => setRequested(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts <= 0}
            >
                Use attempt
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + (parseInt(requested) || 0));
                }}
            >
                Gain
            </Button>
            <p>Number of Attempts: {attempts}</p>
        </div>
    );
}
