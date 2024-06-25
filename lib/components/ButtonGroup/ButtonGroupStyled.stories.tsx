import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { ButtonGroupStyled as ButtonGroup } from "./ButtonGroupStyled";
import * as Settings from "./settings";
import { Button, ButtonSettings } from "../Button";
import {
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

type ButtonGroupAndButtonsArgs = React.ComponentProps<typeof ButtonGroup> & {
  size: Settings.Size;
  variant: Settings.Variant;
};

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

type Story = StoryObj<ButtonGroupAndButtonsArgs>;

export const Styled: Story = {
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: Object.values(Settings.Size),
    },
    variant: {
      control: "select",
      options: Object.values(Settings.Variant),
    },
  },
  args: {
    size: ButtonSettings.Size.MD,
    variant: ButtonSettings.Variant.Secondary,
    // children: ()
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button"));
  },
  render: ({ size, variant, ...args }) => (
    <>
      <ButtonGroup {...args}>
        <Button variant={variant} size={size}>
          Years
        </Button>
        <Button variant={variant} size={size}>
          Months
        </Button>
        <Button variant={variant} size={size}>
          Days
        </Button>
      </ButtonGroup>
    </>
  ),
};

export const IconOnly: Story = {
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: Object.values(Settings.Size),
    },
    variant: {
      control: "select",
      options: Object.values(Settings.Variant),
    },
  },
  args: {
    size: ButtonSettings.Size.MD,
    variant: ButtonSettings.Variant.Secondary,
  },
  render: ({ size, variant, ...args }) => (
    <>
      <ButtonGroup {...args}>
        <Button variant={variant} size={size} className="text-gray-400">
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
        </Button>
        <Button variant={variant} size={size} className="text-gray-400">
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
        </Button>
      </ButtonGroup>
    </>
  ),
};

export const Stat: Story = {
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: Object.values(Settings.Size),
    },
    variant: {
      control: "select",
      options: Object.values(Settings.Variant),
    },
  },
  args: {
    size: ButtonSettings.Size.MD,
    variant: ButtonSettings.Variant.Secondary,
  },
  render: ({ size, variant, ...args }) => (
    <>
      <ButtonGroup {...args}>
        <Button variant={variant} size={size} className="font-semibold">
          <BookmarkIcon
            className="-ml-0.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Bookmark
        </Button>
        <Button variant={variant} size={size} className="font-semibold">
          12k
        </Button>
      </ButtonGroup>
    </>
  ),
};

// TODO: ButtonGroup - Add Checkbox example
// TODO: ButtonGroup - Add Dropdown example
