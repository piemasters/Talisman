import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { ButtonGroup } from "./ButtonGroup";
import { UnstyledButton as Button } from "../Button";

const meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "fullscreen",
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
        <Button>Years</Button>
        <Button>Months</Button>
        <Button>Days</Button>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button"));
  },
  render: ({ children, ...args }) => (
    <>
      <ButtonGroup {...args}>{children}</ButtonGroup>
    </>
  ),
};
