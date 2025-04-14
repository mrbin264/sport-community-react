import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";

const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "The size of the input field",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search", "tel"],
      description: "The type of the input field",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Basic Text Input
export const Text: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    fullWidth: true,
  },
};

// Email Input
export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "user@example.com",
    fullWidth: true,
  },
};

// Password Input
export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    fullWidth: true,
  },
};

// Input with Error
export const WithError: Story = {
  args: {
    label: "Email",
    value: "invalid-email",
    error: true,
    helperText: "Please enter a valid email address",
    fullWidth: true,
  },
};

// Input with Icon
export const WithIcon: Story = {
  args: {
    label: "Username",
    startAdornment: <PersonIcon />,
    fullWidth: true,
  },
};

// Input Variants
export const Variants: StoryObj<InputProps> = {
  render: () => (
    <Stack spacing={3} sx={{ width: "300px" }}>
      <Input label="Text Input" placeholder="Basic text input" />
      <Input
        label="Email Input"
        type="email"
        placeholder="email@example.com"
        startAdornment={<EmailIcon />}
      />
      <Input
        label="Password Input"
        type="password"
        startAdornment={<LockIcon />}
      />
      <Input
        label="Search Input"
        placeholder="Search..."
        startAdornment={<SearchIcon />}
      />
    </Stack>
  ),
};

// Input Sizes
export const Sizes: StoryObj<InputProps> = {
  render: () => (
    <Stack spacing={3} sx={{ width: "300px" }}>
      <Input label="Medium Input (default)" size="medium" />
      <Input label="Small Input" size="small" />
    </Stack>
  ),
};

// Disabled State
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
    fullWidth: true,
  },
};

// Required Input
export const Required: Story = {
  args: {
    label: "Required Field",
    required: true,
    fullWidth: true,
  },
};

// Multi-line Input
export const Multiline: Story = {
  args: {
    label: "Description",
    multiline: true,
    rows: 4,
    placeholder: "Enter a description...",
    fullWidth: true,
  },
};
