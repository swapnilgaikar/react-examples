import react from 'react'
import useCounterHook from './CounterHook'

function CounterExample(){
    const [count, setCount] = new useCounterHook(0)

    return <>
    <p>Current count: {count}</p>
    <button onClick={()=>{
        setCount(count+1)
    }}>Update Count</button>
    <button onClick={()=>{
        setCount(0)
    }}>Reset</button>
    </>
}

export default CounterExample