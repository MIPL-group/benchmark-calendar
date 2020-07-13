import React from 'react';
import './App.css';
import Calendar from "./calendar";
import Navbar from "react-bootstrap/Navbar";
function App() {
    return (
        <div>
            <Navbar bg="light" expand="md" fixed="top" variant="light">
                <Navbar.Brand href="./index.html">Home</Navbar.Brand>
            </Navbar>
            <div className="py-5 text-center">
                <h2 className="mt-2">Calendar</h2>
            </div>
            <div>
                <Calendar/>
            </div>
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">Editing Calendar Benchmark Demo Site</p>
                <a href="https://mipl-group.github.io/">MIPL github page</a>
            </footer>
        </div>
    );
}

export default App;
