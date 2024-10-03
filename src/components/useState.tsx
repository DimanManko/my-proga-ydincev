
import React,{useState} from 'react';

export const UseState = () => {
    //let a = 1

    let[a,setA]=useState(1);
    const onclickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onclickHandler1 = () => {
        setA(0)
        console.log(0)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickHandler1}>0</button>
        </div>
    );
}