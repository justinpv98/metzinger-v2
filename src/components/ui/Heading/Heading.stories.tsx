import { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
  argTypes: {
    level: { control: "radio" },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const h1: Story = {
  args: {
    as: "h1",
    children: "Heading",
    level: "h1",
  },
};

export const h2: Story = {
  args: {
    ...h1.args,
    level: "h2",
  },
};

export const h3: Story = {
  args: {
    ...h1.args,
    level: "h3",
  },
};

export const h4: Story = {
  args: {
    ...h1.args,
    level: "h4",
  },
};

export const h5: Story = {
  args: {
    ...h1.args,
    level: "h5",
  },
};

export const h6: Story = {
  args: {
    ...h1.args,
    level: "h6",
  },
};
