import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { ButtonGroup } from "./ButtonGroup";
import { UnstyledButton as Button } from "../Button";

const meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on.*" },
  },
  decorators: [
    (Story) => (
      <div className="h-full bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center p-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unstyled: Story = {
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: (
      <>
        <Button onClick={fn()}>Years</Button>
        <Button onClick={fn()}>Months</Button>
        <Button onClick={fn()}>Days</Button>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("button")).toHaveLength(3);
    await userEvent.click(canvas.getAllByRole("button")[0]);
  },
  render: ({ children, ...args }) => (
    <>
      <ButtonGroup {...args}>{children}</ButtonGroup>
    </>
  ),
};
