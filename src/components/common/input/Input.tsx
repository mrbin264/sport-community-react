"use client";

import React, { useState, forwardRef } from "react";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";

export interface InputProps extends Omit<TextFieldProps, "variant"> {
  label?: string;
  type?: string;
  error?: boolean;
  helperText?: React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium";
  showPasswordToggle?: boolean;
  "data-testid"?: string;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

/**
 * Reusable Input component that wraps MUI TextField with additional functionality
 */
const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    label,
    type = "text",
    error,
    helperText,
    startAdornment,
    endAdornment,
    fullWidth = true,
    size = "medium",
    showPasswordToggle = true,
    InputProps,
    "data-testid": testId,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const passwordAdornment =
    isPassword && showPasswordToggle ? (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleTogglePasswordVisibility}
          onMouseDown={(e) => e.preventDefault()}
          edge="end"
          size="small"
          data-testid={`${testId}-password-toggle`}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ) : null;

  const mergedEndAdornment =
    isPassword && showPasswordToggle ? (
      passwordAdornment
    ) : endAdornment ? (
      <InputAdornment position="end">{endAdornment}</InputAdornment>
    ) : null;

  const mergedStartAdornment = startAdornment ? (
    <InputAdornment position="start">{startAdornment}</InputAdornment>
  ) : null;

  return (
    <StyledTextField
      ref={ref}
      label={label}
      type={inputType}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      size={size}
      data-testid={testId}
      variant="outlined"
      InputProps={{
        ...InputProps,
        startAdornment: mergedStartAdornment || InputProps?.startAdornment,
        endAdornment: mergedEndAdornment || InputProps?.endAdornment,
      }}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export default Input;
