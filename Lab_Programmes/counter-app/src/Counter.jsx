import React, {useState, useEffect} from 'react';

const Counter=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Fetching initial data...");
    },[]);

    const increment=()=>setCount(prevCount=>prevCount+1);
    const decrement=()=>setCount(prevCount=>prevCount-1);
    const doubleCount=()=>setCount(prevCount=>prevCount*2);
    const resetCount=()=>setCount(0);

    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={doubleCount}>Double Count</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default Counter;
