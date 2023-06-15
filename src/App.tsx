import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordeon} from './components/Accordeon/Accordeon';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordeon} from "./components/UncontrolledAccordeon/UncontrolledAccordeon";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log('App is rendering');
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordeonCollapced, setAccordeonCollapced] = useState<boolean>(false)
    return (
        <div className={"App"}>
            <Pagetitle title="This is an App component"/>
            <Accordeon titleValue="Accordeon" collapsed={accordeonCollapced}/>

            ---Rating---
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            ---OnOff---
            <OnOff/>
            <OnOff/>
            ---UncontrolledAccordeon---
            <UncontrolledAccordeon titleValue="Accordeon"/>
            ---UncontrolledRating---
            <UncontrolledRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function Pagetitle(props: PageTitlePropsType) {
    console.log("Pagetitle is rendering");
    return <h1>{props.title}</h1>
}


export default App;



