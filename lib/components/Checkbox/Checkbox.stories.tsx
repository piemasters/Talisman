import type { Meta, StoryObj } from "@storybook/react";
import { fn, expect, userEvent, within } from "@storybook/test";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unstyled: Story = {
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: { onCheckedChange: fn() },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("checkbox")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("checkbox"));
  },
  render: ({ children, ...args }) => (
    <>
      <Checkbox {...args}>{children}</Checkbox>
    </>
  ),
};
