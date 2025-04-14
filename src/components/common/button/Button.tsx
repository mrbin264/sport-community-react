"use client";

import React from "react";
import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

/**
 * Extended ButtonProps interface with additional properties
 */
export interface ButtonProps extends Omit<MuiButtonProps, "color" | "variant"> {
  variant?: "primary" | "secondary" | "text";
  isLoading?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  "data-testid"?: string;
}

// Custom styled button for consistent styling
const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "isLoading",
})<{ isLoading?: boolean }>(() => ({
  position: "relative",
  minWidth: 100,
  transition: "all 0.2s",
  "&:disabled": {
    opacity: 0.7,
  },
}));

/**
 * Reusable Button component that extends MUI Button with custom variants and loading state
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = "primary",
      isLoading = false,
      disabled,
      fullWidth = false,
      size = "medium",
      startIcon,
      endIcon,
      "data-testid": testId,
      ...rest
    } = props;

    // Map our custom variants to MUI variants and colors
    let muiVariant: MuiButtonProps["variant"] = "contained";
    let muiColor: MuiButtonProps["color"] = "primary";

    if (variant === "primary") {
      muiVariant = "contained";
      muiColor = "primary";
    } else if (variant === "secondary") {
      muiVariant = "contained";
      muiColor = "secondary";
    } else if (variant === "text") {
      muiVariant = "text";
      muiColor = "primary";
    }

    return (
      <StyledButton
        ref={ref}
        variant={muiVariant}
        color={muiColor}
        disabled={isLoading || disabled}
        fullWidth={fullWidth}
        size={size}
        startIcon={!isLoading && startIcon}
        endIcon={!isLoading && endIcon}
        isLoading={isLoading}
        data-testid={testId}
        {...rest}
      >
        {isLoading ? (
          <>
            <CircularProgress
              size={24}
              color="inherit"
              sx={(theme) => ({
                position: "absolute",
                left: "50%",
                marginLeft: theme.spacing(-1.5),
              })}
            />
            <span style={{ visibility: "hidden" }}>{children}</span>
          </>
        ) : (
          children
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
