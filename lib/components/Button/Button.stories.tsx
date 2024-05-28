import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { PlusIcon } from "@heroicons/react/20/solid";
import { cn } from "../../util/cn";
import {
  CoreButton,
  Button,
  ButtonSettings as Settings,
  ButtonStyles as Styles,
} from ".";

const meta = {
  title: "Buttons",
  component: Button,
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

export const Core: Story = {
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Button Text",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button"));
  },
  render: ({ children, ...args }) => (
    <>
      <CoreButton {...args}>{children}</CoreButton>
    </>
  ),
};

export const Styled: Story = {
  argTypes: {
    circular: {
      control: "boolean",
    },
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
    circular: false,
    children: "Button Text",
    size: Settings.Size.MD,
    variant: Settings.Variant.Primary,
  },
  render: ({ children, ...args }) => (
    <>
      <Button {...args}>{children}</Button>
    </>
  ),
};

export const Primary: Story = {
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Button Text",
  },
  render: ({ children, ...args }) => (
    <>
      <Button
        size={Settings.Size.XS}
        variant={Settings.Variant.Primary}
        {...args}
      >
        {children}
      </Button>
      <Button
        size={Settings.Size.SM}
        variant={Settings.Variant.Primary}
        {...args}
      >
        {children}
      </Button>
      <Button
        size={Settings.Size.MD}
        variant={Settings.Variant.Primary}
        {...args}
      >
        {children}
      </Button>
      <Button
        size={Settings.Size.LG}
        variant={Settings.Variant.Primary}
        {...args}
      >
        {children}
      </Button>
      <Button
        size={Settings.Size.XL}
        variant={Settings.Variant.Primary}
        {...args}
      >
        {children}
      </Button>
    </>
  ),
};

export const Secondary: Story = {
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Button Text",
  },
  render: ({ children, ...args }) => (
    <>
      <Button
        size={Settings.Size.XS}
        variant={Settings.Variant.Secondary}
        {...args}
      >
        {children}
      </Button>
      <Button
        size={Settings.Size.SM}
        variant={Settings.Variant.Secondary}
        {...args}
      >
        {children}
      </Button>
      <Button
        size={Settings.Size.MD}
        variant={Settings.Variant.Secondary}
        {...args}
      >
        {children}
      </Button>
      <Button
        size={Settings.Size.LG}
        variant={Settings.Variant.Secondary}
        {...args}
      >
        {children}
      </Button>
      <Button
        size={Settings.Size.XL}
        variant={Settings.Variant.Secondary}
        {...args}
      >
        {children}
      </Button>
    </>
  ),
};

export const Soft: Story = {
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Button Text",
  },
  render: ({ children, ...args }) => (
    <>
      <Button size={Settings.Size.XS} variant={Settings.Variant.Soft} {...args}>
        {children}
      </Button>
      <Button size={Settings.Size.SM} variant={Settings.Variant.Soft} {...args}>
        {children}
      </Button>
      <Button size={Settings.Size.MD} variant={Settings.Variant.Soft} {...args}>
        {children}
      </Button>
      <Button size={Settings.Size.LG} variant={Settings.Variant.Soft} {...args}>
        {children}
      </Button>
      <Button size={Settings.Size.XL} variant={Settings.Variant.Soft} {...args}>
        {children}
      </Button>
    </>
  ),
};

export const Circular: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(Settings.Variant),
    },
  },
  args: {
    variant: Settings.Variant.Primary,
  },
  render: ({ ...args }) => (
    <>
      <Button size={Settings.Size.XS} circular={true} {...args}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button size={Settings.Size.SM} circular={true} {...args}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button size={Settings.Size.MD} circular={true} {...args}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button size={Settings.Size.LG} circular={true} {...args}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button size={Settings.Size.XL} circular={true} {...args}>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
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
  },
  render: ({ children, ...args }) => (
    <>
      <CoreButton
        className={cn(
          Styles.Core.Primary,
          Styles.Size.MD,
          "text-white bg-red-600 hover:bg-red-500 focus-visible:outline-red-600",
        )}
        {...args}
      >
        {children}
      </CoreButton>
    </>
  ),
};
