import React, {useState} from 'react';
import './App.css';
import {Accordeon} from './components/Accordeon/Accordeon';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordeon} from "./components/UncontrolledAccordeon/UncontrolledAccordeon";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    console.log('App is rendering');
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordeonCollapced, setAccordeonCollapced] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={"App"}>
            <Pagetitle title="This is an App component"/>
            <Accordeon titleValue="Accordeon"
                       collapsed={accordeonCollapced}
                       onChange={() => {
                           setAccordeonCollapced(!accordeonCollapced)
                       }}
                       items={[{title: 'Dimych', value: 1},
                           {title: 'Valera', value: 2},
                           {title: 'Vasya', value: 3}
                       ]}
                       onClick={()=>{}}
            />

            ---Rating---
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            ---OnOff---
            <OnOff on={switchOn} onChange={(on:boolean)=>{setSwitchOn(on)}}/>
            ---UncontrolledOnOff---
            <UncontrolledOnOff onChange={setSwitchOn}/> <p>{switchOn.toString()}</p>
            ---UncontrolledAccordeon---
            <UncontrolledAccordeon titleValue="Accordeon"/>
            ---UncontrolledRating---
            {/*<UncontrolledRating/>*/}
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



