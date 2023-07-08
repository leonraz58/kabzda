import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordeonPropsType = {
    titleValue: string
    //collapsed: boolean
}

type AccordeonTitlePropsType = {
    title: string;
    onClick:()=> void
}

export function UncontrolledAccordeon(props: AccordeonPropsType) {
    console.log('Accordeon is rendering');

    //let [collapsed,setCollapsed]=useState(false)
    let [state,dispatch]=useReducer(reducer, {collapsed: false})
    return (
        <div>
            {/*<AccordeonTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
            <AccordeonTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_CONSTANT})}}/>
            <button onClick={()=>{dispatch({type: TOGGLE_CONSTANT})}}>TOGGLE</button>
            {!state.collapsed && <AccordeonBody/>}
        </div>
    )
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering');
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
        </div>
    )
}

function AccordeonBody() {
    console.log('AccordeonBody rendering');
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}