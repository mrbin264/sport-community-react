import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Spinner, { SpinnerProps } from "./Spinner";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const meta: Meta<typeof Spinner> = {
  title: "Common/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", 80],
      description: "The size of the spinner",
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "inherit",
        "#FF5722",
        "#4CAF50",
        "#2196F3",
      ],
      description: "The color of the spinner",
    },
    thickness: {
      control: { type: "range", min: 1, max: 10, step: 0.5 },
      description: "The thickness of the spinner",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// Basic Spinner
export const Basic: Story = {
  args: {
    size: "medium",
    color: "primary",
  },
};

// Spinner with Label
export const WithLabel: Story = {
  args: {
    size: "medium",
    color: "primary",
    label: "Loading...",
  },
};

// Different Sizes
export const Sizes: StoryObj<SpinnerProps> = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner size="small" />
        <Typography variant="caption" sx={{ mt: 1 }}>
          small
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner size="medium" />
        <Typography variant="caption" sx={{ mt: 1 }}>
          medium
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner size="large" />
        <Typography variant="caption" sx={{ mt: 1 }}>
          large
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner size={80} />
        <Typography variant="caption" sx={{ mt: 1 }}>
          custom (80px)
        </Typography>
      </Box>
    </Stack>
  ),
};

// Different Colors
export const Colors: StoryObj<SpinnerProps> = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner color="primary" />
        <Typography variant="caption" sx={{ mt: 1 }}>
          primary
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner color="secondary" />
        <Typography variant="caption" sx={{ mt: 1 }}>
          secondary
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner color="#FF5722" />
        <Typography variant="caption" sx={{ mt: 1 }}>
          custom (#FF5722)
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner color="#4CAF50" />
        <Typography variant="caption" sx={{ mt: 1 }}>
          custom (#4CAF50)
        </Typography>
      </Box>
    </Stack>
  ),
};

// Different Thickness
export const Thickness: StoryObj<SpinnerProps> = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner thickness={1} />
        <Typography variant="caption" sx={{ mt: 1 }}>
          thickness: 1
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner thickness={3.6} />
        <Typography variant="caption" sx={{ mt: 1 }}>
          thickness: 3.6 (default)
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner thickness={6} />
        <Typography variant="caption" sx={{ mt: 1 }}>
          thickness: 6
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Spinner thickness={8} />
        <Typography variant="caption" sx={{ mt: 1 }}>
          thickness: 8
        </Typography>
      </Box>
    </Stack>
  ),
};
