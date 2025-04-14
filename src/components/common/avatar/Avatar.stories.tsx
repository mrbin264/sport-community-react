import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Avatar, { AvatarProps } from "./Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const meta: Meta<typeof Avatar> = {
  title: "Common/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", 96],
      description: "The size of the avatar",
    },
    variant: {
      control: "select",
      options: ["circular", "rounded", "square"],
      description: "The shape of the avatar",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// Avatar with Image
export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "User avatar",
    size: "md",
  },
};

// Avatar with Initials
export const WithInitials: Story = {
  args: {
    name: "John Doe",
    alt: "John Doe",
    size: "md",
  },
};

// Avatar Sizes
export const Sizes: StoryObj<AvatarProps> = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar size="xs" name="XS" />
        <Typography variant="caption">xs</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar size="sm" name="SM" />
        <Typography variant="caption">sm</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar size="md" name="MD" />
        <Typography variant="caption">md</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar size="lg" name="LG" />
        <Typography variant="caption">lg</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar size="xl" name="XL" />
        <Typography variant="caption">xl</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar size={96} name="96" />
        <Typography variant="caption">96px</Typography>
      </Box>
    </Stack>
  ),
};

// Avatar Variants
export const Variants: StoryObj<AvatarProps> = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar variant="circular" name="AB" size="lg" />
        <Typography variant="caption">circular</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar variant="rounded" name="AB" size="lg" />
        <Typography variant="caption">rounded</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar variant="square" name="AB" size="lg" />
        <Typography variant="caption">square</Typography>
      </Box>
    </Stack>
  ),
};

// Multiple Users with Different Colors
export const MultipleUsers: StoryObj<AvatarProps> = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Avatar name="John Doe" />
      <Avatar name="Jane Smith" />
      <Avatar name="Bob Johnson" />
      <Avatar name="Alice Williams" />
      <Avatar name="Charlie Brown" />
    </Stack>
  ),
};

// Fallback to Initials
export const FallbackToInitials: Story = {
  args: {
    src: "https://broken-image-url.jpg",
    name: "Fallback User",
    size: "lg",
  },
};
