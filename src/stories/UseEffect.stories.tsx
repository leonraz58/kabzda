import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect only first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>counter+
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake+
        </button>
    </>
}

export const SetTimeOutExample = () => {
    console.log('SetTimeOutExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    // useEffect(() => {
    //     console.log('useEffect')
    //     setTimeout(()=>{
    //         document.title = counter.toString()
    //         console.log('111')
    //     },5000)
    // },[counter])
    useEffect(() => {
        console.log('useEffect')
        setInterval(() => {
            console.log('tick ' + counter)
            setCounter(state => state + 1)
        }, 5000)
    }, [])

    return <>
        Hello, counter: {counter} fake: {fake}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>counter+
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake+
        </button>
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounder] = useState(1)
    console.log('ResetEffectExample rendered ' + counter)
    useEffect(() => {
        console.log('effect occured: ' + counter)

        //перед замуском нового эффекта или умирании компоненты
        return () => {
            console.log('reset effect')
        }
    }, [counter])

    const increase = () => {
        setCounder(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>x</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')
    console.log('ResetEffectExample rendered ' + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])


    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample2 = () => {

    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)
    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            console.log('Timeout expired')
            setText('3 sec passed')
        },3000)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])


    return <>
        Typed text: {text}
    </>
}