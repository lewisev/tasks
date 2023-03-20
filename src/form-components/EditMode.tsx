import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    const editing = () => {
        return (
            <div>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Check
                        type="checkbox"
                        id="studentCheckbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={() => setStudent(!isStudent)}
                    />
                </Form.Group>
            </div>
        );
    };

    const viewing = () => {
        return isStudent ? (
            <p>{username} is a student</p>
        ) : (
            <p>{username} is not a student</p>
        );
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ? editing() : viewing()}
            <Form.Check
                type="switch"
                id="editmodeSwitch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
        </div>
    );
}
