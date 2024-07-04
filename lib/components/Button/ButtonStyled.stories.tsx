import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import { CheckCircleIcon, PlusIcon } from "@heroicons/react/20/solid";

import * as Settings from "./settings";
import { ButtonStyled as Button } from "./ButtonStyled";
import {
  CardWrapper,
  CodeWrapper,
  GroupWrapper,
  VariantWrapper,
} from "./StoryComponents";

const meta = {
  title: "Buttons",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-full bg-white dark:bg-gray-900">
        <div className="px-4 py-8">
          <Story />
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
      options: Object.values(Settings.SizeArray),
    },
    variant: {
      control: "select",
      options: Object.values(Settings.VariantArray),
    },
  },
  args: {
    children: "Button Text",
    circular: false,
    disabled: false,
    onClick: fn(),
    rounded: false,
    size: "MD",
    variant: "Primary",
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
  render: ({ children, ...args }) => {
    const text = `<Button variant="${args.variant}" size="${args.size}"${args.circular ? " circular={true}" : ""}${args.rounded ? " rounded={true}" : ""}${args.disabled ? " disabled={true}" : ""}>${children}</Button>`;
    return (
      <div className="flex flex-col items-center">
        <CodeWrapper text={text} />
        <Button {...args}>{children}</Button>
      </div>
    );
  },
};

export const Primary: Story = {
  args: {
    variant: "Primary",
  },
  render: ({ children, ...args }) => (
    <>
      <VariantWrapper>
        {Object.values(Settings.SizeArray).map((size) => (
          <div key={size}>
            <Button {...args} size={size}>
              {children}
            </Button>
          </div>
        ))}
      </VariantWrapper>
    </>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "Secondary",
  },
  render: ({ children, ...args }) => (
    <>
      <VariantWrapper>
        {Object.values(Settings.SizeArray).map((size) => (
          <div key={size}>
            <Button {...args} size={size}>
              {children}
            </Button>
          </div>
        ))}
      </VariantWrapper>
    </>
  ),
};

export const Soft: Story = {
  args: {
    variant: "Soft",
  },
  render: ({ children, ...args }) => (
    <>
      <VariantWrapper>
        {Object.values(Settings.SizeArray).map((size) => (
          <div key={size}>
            <Button {...args} size={size}>
              {children}
            </Button>
          </div>
        ))}
      </VariantWrapper>
    </>
  ),
};

export const Circular: Story = {
  args: {
    circular: true,
  },
  render: ({ ...args }) => (
    <>
      <VariantWrapper>
        {Object.values(Settings.SizeArray).map((size) => (
          <div key={size}>
            <Button {...args} size={size}>
              <PlusIcon className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        ))}
      </VariantWrapper>
    </>
  ),
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  render: ({ children, ...args }) => (
    <>
      <VariantWrapper>
        {Object.values(Settings.SizeArray).map((size) => (
          <div key={size}>
            <Button {...args} size={size}>
              {children}
            </Button>
          </div>
        ))}
      </VariantWrapper>
    </>
  ),
};

export const Icons: Story = {
  args: {},
  render: ({ children, ...args }) => (
    <div className="grid items-center max-w-3xl grid-cols-1 gap-4 mx-auto md:grid-cols-3 place-items-center">
      <Button {...args}>
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
        {children}
      </Button>
      <Button {...args}>
        {children}
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button {...args}>
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
        {children}
        <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
    </div>
  ),
};

export const States: Story = {
  args: {},
  parameters: {
    pseudo: {
      hover: ["#primary-hover"],
      focus: ["#primary-focus"],
      active: ["#primary-active"],
    },
  },
  render: ({ children, ...args }) => (
    <VariantWrapper>
      <Button id="primary" {...args}>
        {children}
      </Button>
      <Button id="primary-hover" {...args}>
        {children}
      </Button>
      <Button id="primary-active" {...args}>
        {children}
      </Button>
      <Button id="primary-focus" {...args}>
        {children}
      </Button>
      <Button id="primary" {...args} disabled={true}>
        {children}
      </Button>
    </VariantWrapper>
  ),
};

export const All: Story = {
  args: {
    variant: "Primary",
  },
  parameters: {
    pseudo: {
      hover: ["#hover"],
      focus: ["#focus"],
      focusVisible: ["#focus-visible"],
      active: ["#active"],
    },
  },
  render: ({ children, ...args }) => (
    <>
      <GroupWrapper
        title="States"
        description="The different states of the button, only disabled can be set via a prop"
      >
        {[
          "default",
          "hover",
          "focus",
          "focus-visible",
          "active",
          "disabled",
        ].map((state) => {
          const copy = `<Button variant="${args.variant}">${children}</Button>`;
          const copyDisabled = `<Button variant="${args.variant}" disabled={true}>${children}</Button>`;
          return (
            <CardWrapper key={`states-${state}`}>
              <CodeWrapper
                text={state === "disabled" ? "disabled={true}" : state}
                copy={state === "disabled" ? copyDisabled : copy}
              />
              <Button {...args} id={state} disabled={state === "disabled"}>
                {children}
              </Button>
            </CardWrapper>
          );
        })}
      </GroupWrapper>
      <GroupWrapper
        title="Sizes"
        description="The list of sizes is stored in the Settings object"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}">${children}</Button>`;
          return (
            <CardWrapper key={`size-${size}`}>
              <CodeWrapper text={`size="${size}"`} copy={copy} />
              <Button {...args} size={size}>
                {children}
              </Button>
            </CardWrapper>
          );
        })}
      </GroupWrapper>
      <GroupWrapper
        title="Rounded"
        description="Rounded buttons can be used with both text and icons as children"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}" rounded={true}>${children}</Button>`;
          return (
            <CardWrapper key={`rounded-${size}`}>
              <CodeWrapper text="rounded={true}" copy={copy} />
              <Button {...args} rounded={true} size={size}>
                {children}
              </Button>
            </CardWrapper>
          );
        })}
      </GroupWrapper>
      <GroupWrapper
        title="Circular"
        description="Circular buttons should only be used with a single icon as a child"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}" circular={true}><PlusIcon className="w-5 h-5" aria-hidden="true" /></Button>`;
          return (
            <CardWrapper key={`circular-${size}`}>
              <CodeWrapper text="circular={true}" copy={copy} />
              <Button {...args} circular={true} size={size}>
                <PlusIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </CardWrapper>
          );
        })}
      </GroupWrapper>
      <GroupWrapper
        title="Icon Leading"
        description="Examples of a leading icon with each size button"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}"><CheckCircleIcon className="w-5 h-5" aria-hidden="true" />${children}</Button>`;
          return (
            <CardWrapper key={`icon-leading-${size}`}>
              <CodeWrapper text="icon-leading" copy={copy} />
              <Button {...args} size={size}>
                <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
                {children}
              </Button>
            </CardWrapper>
          );
        })}
      </GroupWrapper>
      <GroupWrapper
        title="Icon Trailing"
        description="Examples of a trailing icon with each size button"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}">${children}<CheckCircleIcon className="w-5 h-5" aria-hidden="true" /></Button>`;
          return (
            <CardWrapper key={`icon-trailing-${size}`}>
              <CodeWrapper text="icon-trailing" copy={copy} />
              <Button {...args} size={size}>
                {children}
                <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </CardWrapper>
          );
        })}
      </GroupWrapper>
      <GroupWrapper
        title="Icon Surrounding"
        description="Examples of a surrounding icons with each size button"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}"><CheckCircleIcon className="w-5 h-5" aria-hidden="true" />${children}<CheckCircleIcon className="w-5 h-5" aria-hidden="true" /></Button>`;
          return (
            <CardWrapper key={`icon-surrounding-${size}`}>
              <CodeWrapper text="icons-surrounding" copy={copy} />
              <Button {...args} size={size}>
                <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
                {children}
                <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </CardWrapper>
          );
        })}
      </GroupWrapper>
    </>
  ),
};
