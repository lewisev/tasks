import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({ onClick }: { onClick: () => void }): JSX.Element {
    return <Button onClick={onClick}>Double</Button>;
}

function Halver({ onClick }: { onClick: () => void }): JSX.Element {
    return <Button onClick={onClick}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler onClick={() => setDhValue(dhValue * 2)}></Doubler>
            <Halver onClick={() => setDhValue(dhValue * 0.5)}></Halver>
        </div>
    );
}
