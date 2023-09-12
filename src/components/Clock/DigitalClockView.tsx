import React from "react";
import {ClockViewPropsType, get2digitsString} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = (props) => {
    return <>
        <span>{get2digitsString(props.date.getHours())}</span>
        :
        <span>{get2digitsString(props.date.getMinutes())}</span>
        :
        <span>{get2digitsString(props.date.getSeconds())}</span>
    </>
}