import React, {useState} from "react";

type AccordeonPropTipe = {
    titleValue: string
    //collapsed: boolean
}

type AccordeonTitlePropsType = {
    title: string;
}

export function UncontrolledAccordeon(props: AccordeonPropTipe) {
    console.log('Accordeon is rendering');
    //const collapsed = true
    let [collapsed,setCollapsed]=useState(false)
    return (
        <div>
            <AccordeonTitle title={props.titleValue}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordeonBody/>}
        </div>
    )
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering');
    return (
        <div>
            <h3>{props.title}</h3>
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