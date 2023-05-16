import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SimonColor } from './components/SimonColor';

function App() {
    return (
        <div className="container">
            <SimonColor />
            <SimonColor />
            <SimonColor />
            {/* Create a blue-only component */}
            <div>BLUE IS MISSING</div>
        </div>
    );
}

export default App;
