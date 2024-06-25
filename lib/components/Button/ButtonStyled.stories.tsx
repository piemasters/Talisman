import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import { CheckCircleIcon, PlusIcon } from "@heroicons/react/20/solid";

import * as Settings from "./settings";
import { ButtonStyled as Button } from "./ButtonStyled";

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
  argTypes: {
    children: {
      control: "text",
    },
    circular: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
    rounded: {
      control: "boolean",
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
    children: "Button Text",
    circular: false,
    disabled: false,
    onClick: fn(),
    rounded: false,
    size: Settings.Size.MD,
    variant: Settings.Variant.Primary,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Styled: Story = {
  args: {},
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

export const Primary: Story = {
  args: {
    variant: Settings.Variant.Primary,
  },
  render: ({ children, ...args }) => (
    <>
      <Button {...args} size={Settings.Size.XS}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.SM}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.MD}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.LG}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.XL}>
        {children}
      </Button>
      <Button {...args} disabled={true} size={Settings.Size.XL}>
        {children}
      </Button>
    </>
  ),
};

export const Secondary: Story = {
  args: {
    variant: Settings.Variant.Secondary,
  },
  render: ({ children, ...args }) => (
    <>
      <Button {...args} size={Settings.Size.XS}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.SM}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.MD}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.LG}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.XL}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.XL} disabled={true}>
        {children}
      </Button>
    </>
  ),
};

export const Soft: Story = {
  args: {
    variant: Settings.Variant.Soft,
  },
  render: ({ children, ...args }) => (
    <>
      <Button {...args} size={Settings.Size.XS}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.SM}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.MD}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.LG}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.XL}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.XL} disabled={true}>
        {children}
      </Button>
    </>
  ),
};

export const Circular: Story = {
  args: {
    circular: true,
  },
  render: ({ ...args }) => (
    <>
      <Button {...args} size={Settings.Size.XS}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args} size={Settings.Size.SM}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args} size={Settings.Size.MD}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args} size={Settings.Size.LG}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args} size={Settings.Size.XL}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
    </>
  ),
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  render: ({ children, ...args }) => (
    <>
      <Button {...args} size={Settings.Size.XS}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.SM}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.MD}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.LG}>
        {children}
      </Button>
      <Button {...args} size={Settings.Size.XL}>
        {children}
      </Button>
    </>
  ),
};

export const IconLeading: Story = {
  args: {},
  render: ({ children, ...args }) => (
    <>
      <Button {...args} size={Settings.Size.XS}>
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
        {children}
      </Button>
      <Button {...args} size={Settings.Size.SM}>
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
        {children}
      </Button>
      <Button {...args} size={Settings.Size.MD}>
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
        {children}
      </Button>
      <Button {...args} size={Settings.Size.LG}>
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
        {children}
      </Button>
      <Button {...args} size={Settings.Size.XL}>
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
        {children}
      </Button>
    </>
  ),
};

export const IconTrailing: Story = {
  args: {},
  render: ({ children, ...args }) => (
    <>
      <Button {...args} size={Settings.Size.XS}>
        {children}
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args} size={Settings.Size.SM}>
        {children}
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args} size={Settings.Size.MD}>
        {children}
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args} size={Settings.Size.LG}>
        {children}
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args} size={Settings.Size.XL}>
        {children}
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
    </>
  ),
};

export const IconsSurrounding: Story = {
  args: {},
  render: ({ children, ...args }) => (
    <>
      <Button {...args} size={Settings.Size.MD}>
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
        {children}
      </Button>
      <Button {...args} size={Settings.Size.MD}>
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
        {children}
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args} size={Settings.Size.MD}>
        {children}
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
    </>
  ),
};
