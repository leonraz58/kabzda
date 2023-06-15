import React, {useState} from "react";

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
    //const collapsed = true
    let [collapsed,setCollapsed]=useState(false)
    return (
        <div>
            <AccordeonTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordeonBody/>}
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