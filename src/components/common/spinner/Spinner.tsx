"use client";

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import type { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export type SpinnerSize = "small" | "medium" | "large" | number;

export interface SpinnerProps extends Omit<BoxProps, "color"> {
  size?: SpinnerSize;
  color?: "primary" | "secondary" | "inherit" | string;
  thickness?: number;
  label?: string;
  fullscreen?: boolean;
  "data-testid"?: string;
}

const sizeMap: Record<string, number> = {
  small: 24,
  medium: 40,
  large: 56,
};

const FullScreenContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  zIndex: theme.zIndex.modal + 1,
}));

/**
 * Reusable Spinner component for loading indicators
 */
const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "primary",
  thickness = 3.6,
  label,
  fullscreen = false,
  "data-testid": testId,
  ...rest
}) => {
  const spinnerSize =
    typeof size === "string" ? sizeMap[size] || sizeMap.medium : size;

  const spinnerElement = (
    <>
      <CircularProgress
        size={spinnerSize}
        color={
          color === "primary" || color === "secondary" || color === "inherit"
            ? color
            : undefined
        }
        sx={{
          color:
            color !== "primary" && color !== "secondary" && color !== "inherit"
              ? color
              : undefined,
        }}
        thickness={thickness}
        data-testid={testId}
      />
      {label && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 2 }}
          data-testid={`${testId}-label`}
        >
          {label}
        </Typography>
      )}
    </>
  );

  if (fullscreen) {
    return <FullScreenContainer>{spinnerElement}</FullScreenContainer>;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      {spinnerElement}
    </Box>
  );
};

export default Spinner;
