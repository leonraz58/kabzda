import React, {useMemo, useState} from "react";

export default {
    title: "UseState",
}

function generateData() {
    //difficult counting
    console.log('generateData')
    return 100500
}

export const Example1 = () =>{
    console.log('Example1')
    //const initialValue = useMemo(generateData,[])

    const [counter, setCounter] = useState(generateData)


    return <>
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}