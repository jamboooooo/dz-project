import type { Meta, StoryObj } from "@storybook/react";

import Button from "../../components/Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      defaultValue: "primary",
      description: "Типы внешнего вида",
      options: ["primary", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Button",
  },
};
