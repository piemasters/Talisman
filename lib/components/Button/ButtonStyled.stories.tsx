import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import { CheckCircleIcon, PlusIcon } from "@heroicons/react/20/solid";

import {
  StoryCard,
  StoryCodeBlock,
  StoryCardGroup,
  StoryCenter,
  StoryWrapper,
} from "../../storybook";

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
      <StoryWrapper>
        <Story />
      </StoryWrapper>
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

export const Default: Story = {
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
      <StoryCenter>
        <div className="flex flex-col items-center">
          <StoryCodeBlock text={text} />
          <Button {...args}>{children}</Button>
        </div>
      </StoryCenter>
    );
  },
};

export const Primary: Story = {
  args: {
    variant: "Primary",
  },
  render: ({ children, ...args }) => (
    <StoryCenter>
      {Object.values(Settings.SizeArray).map((size) => (
        <div key={size}>
          <Button {...args} size={size}>
            {children}
          </Button>
        </div>
      ))}
    </StoryCenter>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "Secondary",
  },
  render: ({ children, ...args }) => (
    <StoryCenter>
      {Object.values(Settings.SizeArray).map((size) => (
        <div key={size}>
          <Button {...args} size={size}>
            {children}
          </Button>
        </div>
      ))}
    </StoryCenter>
  ),
};

export const Soft: Story = {
  args: {
    variant: "Soft",
  },
  render: ({ children, ...args }) => (
    <StoryCenter>
      {Object.values(Settings.SizeArray).map((size) => (
        <div key={size}>
          <Button {...args} size={size}>
            {children}
          </Button>
        </div>
      ))}
    </StoryCenter>
  ),
};

export const Circular: Story = {
  args: {
    circular: true,
  },
  render: ({ ...args }) => (
    <StoryCenter>
      {Object.values(Settings.SizeArray).map((size) => (
        <div key={size}>
          <Button {...args} size={size}>
            <PlusIcon className="w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
      ))}
    </StoryCenter>
  ),
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  render: ({ children, ...args }) => (
    <StoryCenter>
      {Object.values(Settings.SizeArray).map((size) => (
        <div key={size}>
          <Button {...args} size={size}>
            {children}
          </Button>
        </div>
      ))}
    </StoryCenter>
  ),
};

export const Icons: Story = {
  args: {},
  render: ({ children, ...args }) => (
    <StoryCenter>
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
    </StoryCenter>
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
    <StoryCenter>
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
    </StoryCenter>
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
      <StoryCardGroup
        title="States"
        description="The different states of the button, only disabled can be set via a prop (requires a refresh when toggling variant)"
      >
        {[
          "default",
          "hover",
          "active",
          "focus",
          "focus-visible",
          "disabled",
        ].map((state) => {
          const copy = `<Button variant="${args.variant}">${children}</Button>`;
          const copyDisabled = `<Button variant="${args.variant}" disabled={true}>${children}</Button>`;
          return (
            <StoryCard key={`states-${state}`}>
              <StoryCodeBlock
                text={state === "disabled" ? "disabled={true}" : state}
                copy={state === "disabled" ? copyDisabled : copy}
              />
              <Button {...args} id={state} disabled={state === "disabled"}>
                {children}
              </Button>
            </StoryCard>
          );
        })}
      </StoryCardGroup>
      <StoryCardGroup
        title="Sizes"
        description="The list of sizes is stored in the Settings object"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}">${children}</Button>`;
          return (
            <StoryCard key={`size-${size}`}>
              <StoryCodeBlock text={`size="${size}"`} copy={copy} />
              <Button {...args} size={size}>
                {children}
              </Button>
            </StoryCard>
          );
        })}
      </StoryCardGroup>
      <StoryCardGroup
        title="Rounded"
        description="Rounded buttons can be used with both text and icons as children"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}" rounded={true}>${children}</Button>`;
          return (
            <StoryCard key={`rounded-${size}`}>
              <StoryCodeBlock text="rounded={true}" copy={copy} />
              <Button {...args} rounded={true} size={size}>
                {children}
              </Button>
            </StoryCard>
          );
        })}
      </StoryCardGroup>
      <StoryCardGroup
        title="Circular"
        description="Circular buttons should only be used with a single icon as a child"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}" circular={true}><PlusIcon className="w-5 h-5" aria-hidden="true" /></Button>`;
          return (
            <StoryCard key={`circular-${size}`}>
              <StoryCodeBlock text="circular={true}" copy={copy} />
              <Button {...args} circular={true} size={size}>
                <PlusIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </StoryCard>
          );
        })}
      </StoryCardGroup>
      <StoryCardGroup
        title="Icon Leading"
        description="Examples of a leading icon with each size button"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}"><CheckCircleIcon className="w-5 h-5" aria-hidden="true" />${children}</Button>`;
          return (
            <StoryCard key={`icon-leading-${size}`}>
              <StoryCodeBlock text="icon-leading" copy={copy} />
              <Button {...args} size={size}>
                <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
                {children}
              </Button>
            </StoryCard>
          );
        })}
      </StoryCardGroup>
      <StoryCardGroup
        title="Icon Trailing"
        description="Examples of a trailing icon with each size button"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}">${children}<CheckCircleIcon className="w-5 h-5" aria-hidden="true" /></Button>`;
          return (
            <StoryCard key={`icon-trailing-${size}`}>
              <StoryCodeBlock text="icon-trailing" copy={copy} />
              <Button {...args} size={size}>
                {children}
                <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </StoryCard>
          );
        })}
      </StoryCardGroup>
      <StoryCardGroup
        title="Icon Surrounding"
        description="Examples of a surrounding icons with each size button"
      >
        {Object.values(Settings.SizeArray).map((size) => {
          const copy = `<Button variant="${args.variant}" size="${size}"><CheckCircleIcon className="w-5 h-5" aria-hidden="true" />${children}<CheckCircleIcon className="w-5 h-5" aria-hidden="true" /></Button>`;
          return (
            <StoryCard key={`icon-surrounding-${size}`}>
              <StoryCodeBlock text="icons-surrounding" copy={copy} />
              <Button {...args} size={size}>
                <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
                {children}
                <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </StoryCard>
          );
        })}
      </StoryCardGroup>
    </>
  ),
};
