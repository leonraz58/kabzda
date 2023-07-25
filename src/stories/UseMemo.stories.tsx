import React, {useCallback, useMemo, useState} from "react";

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

export const LikeUseCallback = () =>{
    console.log('Like useCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(()=>{
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    },[books])

    const addBook = () => {
        console.log(books)
        const newUsers = [...books, 'Angular']
        setBooks(newUsers)
    }

    const memoizedAddBook = useMemo(()=>{
        return addBook
    }, [books])

    const memoizedAddBook2 = useCallback(addBook, [books])

    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>

        {counter}
        <Book books={newArray} addBook={memoizedAddBook}/>
    </>
}

const BooksSecret = (props: {books: Array<string>, addBook: ()=>void}) => {
    console.log('BooksSecret')
    return <div>
        {props.books.map((book,i)=><div key={i}>{book}</div>)}
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)