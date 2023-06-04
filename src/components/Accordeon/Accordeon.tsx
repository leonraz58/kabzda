import React from "react";

type AccordeonPropTipe = {
    titleValue: string;
}

export function Accordeon (props: AccordeonPropTipe){
    console.log('Accordeon is rendering');
    return (
      <div>
        <AccordeonTitle title={props.titleValue}/>
        <AccordeonBody />
      </div>
    )
  }

type AccordeonTitlePropsType ={
    title: string;
}

  function AccordeonTitle (props: AccordeonTitlePropsType){
    console.log('AccordeonTitle rendering');
    return (
      <div>
        <h3>{props.title}</h3>
      </div>
    )
  }
  
  function AccordeonBody (){
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