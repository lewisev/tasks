import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🦃" | "🎃" | "🥚" | "☘️";

const alphabetRecord: Record<Holiday, Holiday> = {
    "🎄": "🥚",
    "🦃": "🎄",
    "🎃": "☘️",
    "🥚": "🎃",
    "☘️": "🦃"
};

const dateRecord: Record<Holiday, Holiday> = {
    "🎄": "☘️",
    "🦃": "🎄",
    "🎃": "🦃",
    "🥚": "🎃",
    "☘️": "🥚"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    return (
        <div>
            <Button onClick={() => setHoliday(alphabetRecord[holiday])}>
                Cycle by Alphabet
            </Button>
            <Button onClick={() => setHoliday(dateRecord[holiday])}>
                Cycle by Year
            </Button>
            <p>Holiday: {holiday}</p>
        </div>
    );
}
