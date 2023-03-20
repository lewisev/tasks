import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoice">
                <Form.Label>Select the correct answer:</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{expectedAnswer === choice ? "✔️" : "❌"}</div>
        </div>
    );
}
