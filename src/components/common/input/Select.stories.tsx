import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Select, { SelectProps } from "./Select";
import Stack from "@mui/material/Stack";

const meta: Meta<typeof Select> = {
  title: "Common/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "The size of the select field",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const sampleOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

const countryOptions = [
  { value: "", label: "Select a country" },
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "jp", label: "Japan" },
];

// Basic Select
export const Basic: Story = {
  args: {
    options: sampleOptions,
    label: "Basic Select",
    defaultValue: "",
  },
};

// Required Select
export const Required: Story = {
  args: {
    options: sampleOptions,
    label: "Required Select",
    defaultValue: "",
    required: true,
  },
};

// With Error
export const WithError: Story = {
  args: {
    options: sampleOptions,
    label: "Invalid Selection",
    defaultValue: "",
    error: true,
    helperText: "Please select a valid option",
  },
};

// Select Sizes
export const Sizes: StoryObj<SelectProps> = {
  render: () => (
    <Stack spacing={3} sx={{ width: "300px" }}>
      <Select
        options={sampleOptions}
        label="Medium Select (default)"
        size="medium"
        defaultValue=""
      />
      <Select
        options={sampleOptions}
        label="Small Select"
        size="small"
        defaultValue=""
      />
    </Stack>
  ),
};

// Disabled Select
export const Disabled: Story = {
  args: {
    options: sampleOptions,
    label: "Disabled Select",
    defaultValue: "",
    disabled: true,
  },
};

// Multiple Select
export const Multiple: Story = {
  args: {
    options: countryOptions,
    label: "Multiple Select",
    defaultValue: [],
    multiple: true,
  },
};

// Country Select Example
export const CountrySelect: Story = {
  args: {
    options: countryOptions,
    label: "Select Country",
    defaultValue: "",
    helperText: "Please select your country",
  },
};
