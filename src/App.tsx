import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {subscribe} from "node:diagnostics_channel";

function App() {
    const Button1Foo = (subscriber:string,age:number,address: string) => {
        console.log(subscriber,age,address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    return (
        <div className="App">
            {/*<button>MyYouTubeChanel-1</button>
      <button>MyYouTubeChanel-2</button>*/}
            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Im Vasya',22,"Chabarovsk")}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo( 'Im Ivan')}/>
        </div>
    );
}

export default App;
