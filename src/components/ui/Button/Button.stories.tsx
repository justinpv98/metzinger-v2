import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        disabled: {control: 'boolean'},
        icon: {control: 'boolean'},
        fluid: {control: 'boolean'}
    }
}
export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: "Button",
        intent: 'primary'
    }
}

export const PrimaryAlt: Story = {
    args: {
        ...Primary.args,
        intent: 'primaryAlt'
    }
}

export const Secondary: Story = {
    args: {
        ...Primary.args,
        intent: 'secondary'
    }
}

export const SecondaryAlt: Story = {
    args: {
        ...Primary.args,
        intent: 'secondaryAlt'
    }
}

export const Disabled: Story = {
    args: {
        ...Primary.args,
        disabled: true
    }
}