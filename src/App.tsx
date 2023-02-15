import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "thistle" }}>Evan</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                style={{ width: "100px", height: "100px" }}
                src="https://data.whicdn.com/images/68232462/original.jpg"
                alt="This is a cat with its face in some toast!"
            />
            <ol>
                <li>eggs</li>
                <li>milk</li>
                <li>coffee</li>
            </ol>

            <p>Hello World!</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Wow I am a column
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "120px",
                                height: "120px",
                                padding: "4px"
                            }}
                        >
                            red box
                        </div>
                    </Col>
                    <Col>
                        Woah me too!
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "120px",
                                height: "120px",
                                padding: "4px"
                            }}
                        >
                            red box
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
