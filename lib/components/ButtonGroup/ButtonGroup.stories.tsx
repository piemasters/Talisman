import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { StoryWrapper } from "../../storybook";

import { ButtonGroup } from "./ButtonGroup";
import { UnstyledButton as Button } from "../Button";

const meta = {
  title: "Unstyled/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on.*" },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
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
