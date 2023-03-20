import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "maroon",
    "blue",
    "purple",
    "seagreen",
    "red",
    "navy",
    "orange",
    "tomato",
    "teal",
    "white",
    "silver"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("maroon");

    const selectColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((colorName) => (
                <Form.Check
                    inline
                    key={colorName}
                    label={colorName}
                    type="radio"
                    name="colors"
                    value={colorName}
                    checked={color == colorName}
                    onChange={selectColor}
                />
            ))}
            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </p>
        </div>
    );
}
