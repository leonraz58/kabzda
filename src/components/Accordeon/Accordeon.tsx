import React from "react";

export type AccordeonPropsTipe = {
    titleValue: string
    collapsed: boolean
    /**
     * test
     */
    onChange:()=>void
    /**
     * color of header
     */
    color?: string
}

type AccordeonTitlePropsType = {
    title: string
    onChange: ()=>void
    color?: string
}

export function Accordeon(props: AccordeonPropsTipe) {
    console.log('Accordeon is rendering');
    return (
        <div>
            <AccordeonTitle
                title={props.titleValue}
                onChange={props.onChange}
                color = {props.color}
            />
            {!props.collapsed && <AccordeonBody/>}
        </div>
    )
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    console.log('AccordeonTitle rendering');
    return (
        <div>
            <h3 style={{color: props.color ? props.color : 'black'}}
                onClick={props.onChange}>{props.title}</h3>
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