import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import SendIcon from "@mui/icons-material/Send";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "text"],
      defaultValue: "primary",
      description: "The variant of the button",
    },
    isLoading: {
      control: "boolean",
      defaultValue: false,
      description: "Whether the button is in a loading state",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
      description: "The size of the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary Button
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

// Secondary Button
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

// Text Button
export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text",
  },
};

// Loading Button
export const Loading: Story = {
  args: {
    children: "Loading Button",
    variant: "primary",
    isLoading: true,
  },
};

// Disabled Button
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

// Button with Icon
export const WithIcon: Story = {
  args: {
    children: "Send",
    variant: "primary",
    startIcon: <SendIcon />,
  },
};

// Full Width Button
export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    variant: "primary",
    fullWidth: true,
  },
};

// Different Sizes
export const Sizes: StoryObj<ButtonProps> = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
  ),
};
