import type { Meta, StoryObj } from "@storybook/react";
import { fn, expect, userEvent, within } from "@storybook/test";
import {
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

import {
  StoryCard,
  StoryCodeBlock,
  StoryCardGroup,
  StoryWrapper,
} from "../../storybook";

import { ButtonGroupStyled as ButtonGroup } from "./ButtonGroupStyled";
import * as Settings from "./settings";
import { Button } from "../Button";

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
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<ButtonGroupAndButtonsArgs>;

export const Default: Story = {
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: Object.values(Settings.SizeArray),
    },
    variant: {
      control: "select",
      options: Object.values(Settings.VariantArray),
    },
  },
  args: {
    size: "MD",
    variant: "Secondary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("button")).toHaveLength(3);
    await userEvent.click(canvas.getAllByRole("button")[0]);
  },
  render: ({ size, variant, ...args }) => {
    return (
      <div className="flex flex-col items-center">
        <StoryCodeBlock text="<ButtonGroup></ButtonGroup>" />
        <ButtonGroup {...args}>
          <Button onClick={fn()} variant={variant} size={size}>
            Days
          </Button>
          <Button onClick={fn()} variant={variant} size={size}>
            Months
          </Button>
          <Button onClick={fn()} variant={variant} size={size}>
            Years
          </Button>
        </ButtonGroup>
      </div>
    );
  },
};

export const IconOnly: Story = {
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: Object.values(Settings.SizeArray),
    },
    variant: {
      control: "select",
      options: Object.values(Settings.VariantArray),
    },
  },
  args: {
    size: "MD",
    variant: "Secondary",
  },
  render: ({ size, variant, ...args }) => (
    <div className="flex flex-col items-center">
      <ButtonGroup {...args}>
        <Button onClick={fn()} variant={variant} size={size}>
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
        </Button>
        <Button onClick={fn()} variant={variant} size={size}>
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
        </Button>
      </ButtonGroup>
    </div>
  ),
};

export const Stat: Story = {
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: Object.values(Settings.SizeArray),
    },
    variant: {
      control: "select",
      options: Object.values(Settings.VariantArray),
    },
  },
  args: {
    size: "MD",
    variant: "Secondary",
  },
  render: ({ size, variant, ...args }) => (
    <div className="flex flex-col items-center">
      <ButtonGroup {...args}>
        <Button
          onClick={fn()}
          variant={variant}
          size={size}
          className="font-semibold"
        >
          <BookmarkIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Bookmark
        </Button>
        <Button
          onClick={fn()}
          variant={variant}
          size={size}
          className="font-semibold"
        >
          12k
        </Button>
      </ButtonGroup>
    </div>
  ),
};

export const All: Story = {
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: Object.values(Settings.SizeArray),
    },
    variant: {
      control: "select",
      options: Object.values(Settings.VariantArray),
    },
  },
  render: ({ ...args }) => {
    const copy = `<ButtonGroup></ButtonGroup>`;
    return (
      <>
        <StoryCardGroup
          title="Uses"
          description="The ButtonGroup component doesn't have any props, it takes a series of Button components as children that can be styled as required. The controls for these stories control the Buttons, not the ButtonGroup."
        >
          <StoryCard>
            <StoryCodeBlock text="default" copy={copy} />
            <ButtonGroup {...args}>
              <Button onClick={fn()} variant={args.variant} size={args.size}>
                Days
              </Button>
              <Button onClick={fn()} variant={args.variant} size={args.size}>
                Months
              </Button>
              <Button onClick={fn()} variant={args.variant} size={args.size}>
                Years
              </Button>
            </ButtonGroup>
          </StoryCard>
          <StoryCard>
            <StoryCodeBlock text="icons-only" copy={copy} />
            <ButtonGroup {...args}>
              <Button onClick={fn()} variant={args.variant} size={args.size}>
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Button onClick={fn()} variant={args.variant} size={args.size}>
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </ButtonGroup>
          </StoryCard>
          <StoryCard>
            <StoryCodeBlock text="stat" copy={copy} />
            <ButtonGroup {...args}>
              <Button
                onClick={fn()}
                variant={args.variant}
                size={args.size}
                className="font-semibold"
              >
                <BookmarkIcon className="-ml-0.5 h-5 w-5 " aria-hidden="true" />
                Bookmark
              </Button>
              <Button
                onClick={fn()}
                variant={args.variant}
                size={args.size}
                className="font-semibold"
              >
                12k
              </Button>
            </ButtonGroup>
          </StoryCard>
        </StoryCardGroup>
      </>
    );
  },
};

// TODO: ButtonGroup - Add Checkbox example
// TODO: ButtonGroup - Add Dropdown example
