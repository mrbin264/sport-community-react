"use client";

import React from "react";
import Dialog from "@mui/material/Dialog";
import type { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

export interface ModalProps extends Omit<DialogProps, "title"> {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: DialogProps["maxWidth"];
  fullWidth?: boolean;
  showCloseButton?: boolean;
  contentPadding?: boolean;
  "data-testid"?: string;
}

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const StyledDialogContent = styled(DialogContent)<{ contentPadding?: boolean }>(
  ({ theme, contentPadding = true }) => ({
    padding: contentPadding ? theme.spacing(2) : 0,
  })
);

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(1, 2, 2),
}));

/**
 * Reusable Modal component based on MUI Dialog
 */
const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onClose,
  title,
  actions,
  maxWidth = "sm",
  fullWidth = true,
  showCloseButton = true,
  contentPadding = true,
  "data-testid": testId,
  ...rest
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      data-testid={testId}
      {...rest}
    >
      {title && (
        <StyledDialogTitle>
          {typeof title === "string" ? (
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          ) : (
            title
          )}
          {showCloseButton && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              size="small"
              data-testid={`${testId}-close-button`}
            >
              <CloseIcon />
            </IconButton>
          )}
        </StyledDialogTitle>
      )}

      <StyledDialogContent contentPadding={contentPadding}>
        {children}
      </StyledDialogContent>

      {actions && <StyledDialogActions>{actions}</StyledDialogActions>}
    </Dialog>
  );
};

export default Modal;
