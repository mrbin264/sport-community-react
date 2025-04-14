import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import Button from "../button/Button";
import Typography from "@mui/material/Typography";

const meta: Meta<typeof Card> = {
  title: "Common/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    elevated: {
      control: "boolean",
      defaultValue: false,
    },
    contentPadding: {
      control: "boolean",
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Basic Card
export const Basic: Story = {
  args: {
    title: "Basic Card",
    children: (
      <Typography variant="body1">
        This is a basic card with a title and some content.
      </Typography>
    ),
    sx: { maxWidth: 400 },
  },
};

// Card with Image
export const WithImage: Story = {
  args: {
    title: "Card with Image",
    subheader: "April 13, 2025",
    image: "https://source.unsplash.com/random/800x400/?sport",
    imageAlt: "Random sports image",
    children: (
      <Typography variant="body1">
        This card includes an image, title, and subheader.
      </Typography>
    ),
    sx: { maxWidth: 400 },
  },
};

// Card with Actions
export const WithActions: Story = {
  args: {
    title: "Card with Actions",
    children: (
      <Typography variant="body1">
        This card includes action buttons at the bottom.
      </Typography>
    ),
    actions: (
      <>
        <Button variant="text" size="small">
          Cancel
        </Button>
        <Button variant="primary" size="small">
          Confirm
        </Button>
      </>
    ),
    sx: { maxWidth: 400 },
  },
};

// Elevated Card
export const Elevated: Story = {
  args: {
    title: "Elevated Card",
    elevated: true,
    children: (
      <Typography variant="body1">
        This card has increased elevation and more prominent shadow.
      </Typography>
    ),
    sx: { maxWidth: 400 },
  },
};

// Complex Card
export const Complex: Story = {
  args: {
    title: "Complex Card Example",
    subheader: "Sports Event",
    image: "https://source.unsplash.com/random/800x400/?tournament",
    imageAlt: "Sports tournament",
    children: (
      <>
        <Typography variant="body1" paragraph>
          This is a complex card that combines multiple features: image, title,
          content, and actions.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: Sports Center, Downtown
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: April 15, 2025
        </Typography>
      </>
    ),
    actions: (
      <>
        <Button variant="text" size="small">
          Share
        </Button>
        <Button variant="text" size="small">
          Learn More
        </Button>
        <Button variant="primary" size="small">
          Register
        </Button>
      </>
    ),
    sx: { maxWidth: 400 },
  },
};
