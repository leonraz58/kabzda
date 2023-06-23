import type { Meta, StoryObj } from '@storybook/react';
import {Accordeon} from "./Accordeon";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordeon',
    component: Accordeon
}

const callback =action('accordeon mode change event fired')
export const CollapcedMode = () => <Accordeon titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UncollapcedMode = () => <Accordeon titleValue={'Users'} collapsed={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordeon titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)}/>
}