import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../button/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const meta: Meta<typeof Modal> = {
  title: "Common/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          {Story({
            args: {
              open,
              onClose: () => setOpen(false),
            },
          })}
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Basic Modal
export const Basic: Story = {
  args: {
    title: "Basic Modal",
    children: (
      <Typography variant="body1">
        This is a basic modal with a title and close button.
      </Typography>
    ),
  },
};

// Modal with Custom Actions
export const WithActions: Story = {
  args: {
    title: "Modal with Actions",
    children: (
      <Typography variant="body1">
        This modal has custom action buttons at the bottom.
      </Typography>
    ),
    actions: (
      <>
        <Button variant="text" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Save
        </Button>
      </>
    ),
  },
};

// Modal with Form
export const WithForm: Story = {
  args: {
    title: "Form Modal",
    children: (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Name" fullWidth />
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Message" multiline rows={4} fullWidth />
      </Box>
    ),
    actions: (
      <>
        <Button variant="text" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Submit
        </Button>
      </>
    ),
  },
};

// Large Modal
export const Large: Story = {
  args: {
    title: "Large Modal",
    maxWidth: "md",
    children: (
      <Box sx={{ minHeight: "300px" }}>
        <Typography variant="body1">
          This is a larger modal with more content space. It uses the
          &quot;md&quot; maxWidth setting. You can use maxWidth to control the
          size of the modal: &quot;xs&quot;, &quot;sm&quot;, &quot;md&quot;,
          &quot;lg&quot;, &quot;xl&quot;.
        </Typography>
      </Box>
    ),
  },
};

// Modal without Padding
export const NoPadding: Story = {
  args: {
    title: "Modal without Content Padding",
    contentPadding: false,
    children: (
      <Box
        sx={{
          height: "200px",
          bgcolor: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">
          This content has no padding inside the modal.
        </Typography>
      </Box>
    ),
  },
};

// Modal with No Close Button
export const NoCloseButton: Story = {
  args: {
    title: "Modal Without Close Button",
    showCloseButton: false,
    children: (
      <Typography variant="body1">
        This modal doesn&apos;t have a close button in the title. The user must
        use the actions or click outside to close it.
      </Typography>
    ),
    actions: (
      <Button variant="primary" onClick={() => {}}>
        Got it
      </Button>
    ),
  },
};
