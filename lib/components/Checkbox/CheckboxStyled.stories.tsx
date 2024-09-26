import type { Meta, StoryObj } from "@storybook/react";
import { fn, expect, userEvent, within } from "@storybook/test";
import { CheckboxStyled as Checkbox } from "./CheckboxStyled";
import { StoryWrapper } from "../../storybook";

const meta = {
  title: "Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unstyled: Story = {
  argTypes: {
    children: {
      control: "text",
    },
    indeterminate: {
      control: "boolean",
    },
    onChange: {
      control: "text",
    },
  },
  args: {
    onChange: fn(),
    indeterminate: false,
  },
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
