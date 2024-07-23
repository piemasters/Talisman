import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

import { cn } from "../../util/cn";
import { StoryWrapper } from "../../storybook";

import { Button } from "./Button";

const meta = {
  title: "Unstyled/Buttons",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
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
    disabled: {
      control: "boolean",
    },
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
          "relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg px-3 py-2 text-sm shadow-sm ring-inset",
          "bg-blue-500 text-white ring-blue-300",
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
