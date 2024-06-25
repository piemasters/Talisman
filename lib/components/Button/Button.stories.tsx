import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

import { cn } from "../../util/cn";
import { Styles } from "./styles";
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
          Styles.Core.Base,
          Styles.Core.Disabled,
          Styles.Size.MD,
          "text-white bg-red-600 hover:bg-red-500 focus-visible:outline-red-600",
        )}
        {...args}
      >
        {children}
      </Button>
    </>
  ),
};
