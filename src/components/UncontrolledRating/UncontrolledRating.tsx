import React, {useState} from 'react';
//import { Star } from '../../App';

type RatingPropsType = {
  //value: 0 | 1|2|3|4|5
}

type StarPropsType = {
  selected: boolean;
}

export function UncontrolledRating(props: RatingPropsType) {

let [value,setValue]=useState(4)
    return (
      <div>
        <Star selected={value>0} /> <button onClick={()=>{setValue(1)}}>1</button>
        <Star selected={value>1} /> <button onClick={()=>{setValue(2)}}>2</button>
        <Star selected={value>2} /> <button onClick={()=>{setValue(3)}}>3</button>
        <Star selected={value>3} /> <button onClick={()=>{setValue(4)}}>4</button>
        <Star selected={value>4} /> <button onClick={()=>{setValue(5)}}>5</button>
      </div>
    );

  function Star(props: StarPropsType) {
    debugger
    if (props.selected === true) {
      return <span><b>Star</b> </span>
    } else {
      return <span>Star </span>
    }
    console.log('Star is rendering');
    return (
      <span><b>Star</b> </span>
    )
  }
}