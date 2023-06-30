import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordeonPropsTipe = {
    titleValue: string
    collapsed: boolean
    /**
     * test
     */
    onChange:()=>void
    color?: string
    items: ItemType[]
    onClick: (onClickvalue:any)=>void
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
            {!props.collapsed && <AccordeonBody items={props.items} onClick={props.onClick}/>}
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

type AccordeonBodyPropsType = {
    items: ItemType[]
    onClick: (value:any)=>void
}
function AccordeonBody(props: AccordeonBodyPropsType) {
    console.log('AccordeonBody rendering');
    return (
        <div>
            <ul>
                {props.items.map((item, index)=><li onClick={()=>{props.onClick(item.value)}} key={index}>{item.title}</li>)}
            </ul>
        </div>
    )
}