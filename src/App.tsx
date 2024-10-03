
import './App.css';
import {Button} from "./components/Button";
import {subscribe} from "node:diagnostics_channel";
import React,{useState} from 'react';
import {UseState} from "./components/useState";

function App() {

    return (
        <div className="App">
            <UseState/>
        </div>
    );
}

export default App;
