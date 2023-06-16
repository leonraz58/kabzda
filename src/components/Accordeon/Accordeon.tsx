import React from "react";

type AccordeonPropsTipe = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
}

type AccordeonTitlePropsType = {
    title: string
    onChange: ()=>void
}

export function Accordeon(props: AccordeonPropsTipe) {
    console.log('Accordeon is rendering');
    return (
        <div>
            <AccordeonTitle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordeonBody/>}
        </div>
    )
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering');
    return (
        <div>
            <h3 onClick={props.onChange}>{props.title}</h3>
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