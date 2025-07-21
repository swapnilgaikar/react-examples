import {useEffect, useState} from 'react';


function CounterHook(defaultValue){
    const [currentCount, setCount] = useState(defaultValue);
    const updateCounter = (value) => setCount(value) 

    return [currentCount, updateCounter]
}

export default CounterHook;