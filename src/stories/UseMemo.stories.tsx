import {useSourceProps} from "@storybook/blocks";
import {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    useMemo(()=>{
        let tempResultA = 1
        for (let i = 1; i<=a; i++ ) {
            let fake = 0
            while (fake < 100000000) {
                fake++
            }
            resultA = resultA * i
        }
        return tempResultA
    }, [a])



    for (let i = 1; i<=b; i++ ) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            result fir a: {resultA}
        </div>
        <div>
            result fir b: {resultB}
        </div>
    </>
}