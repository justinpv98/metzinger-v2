import { Meta, StoryObj } from "@storybook/react";

import Link from "./Link";

const meta: Meta<typeof Link> = {
    component: Link,
    argTypes: {
        disabled: {control: 'boolean'},
        icon: {control: 'boolean'},
        fluid: {control: 'boolean'}
    }
}
export default meta;

type Story = StoryObj<typeof Link>

export const Primary: Story = {
    args: {
        children: "Link",
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