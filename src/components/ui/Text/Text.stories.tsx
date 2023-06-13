import { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta: Meta<typeof Text> = {
    component: Text,
    argTypes: {
        size: {control: "radio"}
    }
}
export default meta;

type Story = StoryObj<typeof Text>

export const Text200: Story = {
    args: {
        children: "Text",
        size: "200",
        weight: "normal"
    }
}

export const Text300: Story = {
    args: {
        ...Text200.args,
        size: "300"
    }
}

export const Text400: Story = {
    args: {
        ...Text200.args,
        size: "400"
    }
}

export const Text500: Story = {
    args: {
        ...Text200.args,
        size: "500"
    }
}

export const Text600: Story = {
    args: {
        ...Text200.args,
        size: "600"
    }
}


export const Text700: Story = {
    args: {
        ...Text200.args,
        size: "700"
    }
}


export const Bold: Story = {
    args: {
        ...Text400.args,
        weight: "bold"
    }
}

export const Italic: Story = {
    args: {
        ...Text400.args,
        italic: true
    }
}

export const Underline: Story = {
    args: {
        ...Text400.args,
        underline: true
    }
}