import {useSourceProps} from "@storybook/blocks";
import React, {useMemo, useState} from "react";

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
            result for a: {resultA}
        </div>
        <div>
            result for b: {resultB}
        </div>
    </>
}



const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users is rendering...')
    return <div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () =>{
    console.log('Example is rendering...')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])


    const newArray = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    },[users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta']
        setUsers(newUsers)
    }

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}