import type {Meta, Story, StoryObj} from '@storybook/react';
import {Accordeon, AccordeonPropsTipe} from "./Accordeon";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Accordeon',
    component: Accordeon,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        },
        onChange: {
            table: {
                category: 'Events'
            }
        }
    }
}

const Template: Story<AccordeonPropsTipe> = (args) => <Accordeon{...args}/>

const callback =action('accordeon mode change event fired')

export const CollapcedMode2 = Template.bind({})
CollapcedMode2.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
}

export const UncollapcedMode2 = Template.bind({})
UncollapcedMode2.args ={
    titleValue: 'Users',
    collapsed: false,
    onChange: callback,
}

export const CollapcedMode = () => <Accordeon titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UncollapcedMode = () => <Accordeon titleValue={'Users'} collapsed={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordeon titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)}/>
}

export const ModeChanging2: Story<AccordeonPropsTipe> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordeon {...args} collapsed={value} onChange={()=>setValue(!value)}/>
}
ModeChanging2.args = {
    titleValue:'Users',

}