import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

import { cn } from "../../util/cn";
import { Button } from "./Button";

const meta = {
  title: "Buttons",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-full bg-white dark:bg-gray-900">
        <div className="px-4 py-8">
          <div className="flex flex-col items-center justify-start max-w-3xl mx-auto space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unstyled: Story = {
  argTypes: {
    children: {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button Text",
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button"));
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
  render: ({ children, ...args }) => (
    <>
      <Button {...args}>{children}</Button>
    </>
  ),
};

export const Custom: Story = {
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Button Text",
    onClick: fn(),
  },
  render: ({ children, ...args }) => (
    <>
      <Button
        className={cn(
          "inline-flex items-center justify-center relative isolate shadow-sm gap-x-2 px-3 py-2 rounded-lg text-sm ring-inset",
          "text-white bg-blue-500 ring-blue-300",
          "hover:bg-blue-600",
          "active:bg-blue-700",
          "focus:ring-2",
          "disabled:bg-gray-200 disabled:text-gray-500",
        )}
        {...args}
      >
        {children}
      </Button>
    </>
  ),
};
