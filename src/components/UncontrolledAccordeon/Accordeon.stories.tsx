import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledAccordeon} from "./UncontrolledAccordeon";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordeon',
    component: UncontrolledAccordeon
}

const callback =action('accordeon mode change event fired')

export const ModeChanging = () => {
        return <UncontrolledAccordeon titleValue={'Users'}/>
}