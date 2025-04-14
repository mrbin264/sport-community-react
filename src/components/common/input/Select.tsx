"use client";

import React, { forwardRef } from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";
import type { SelectProps as MuiSelectProps } from "@mui/material/Select";
import { styled } from "@mui/material/styles";

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps extends Omit<MuiSelectProps, "variant"> {
  options: SelectOption[];
  label?: string;
  helperText?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium";
  required?: boolean;
  "data-testid"?: string;
}

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

/**
 * Reusable Select component that wraps MUI Select with additional functionality
 */
const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    options,
    label,
    helperText,
    error,
    fullWidth = true,
    size = "medium",
    required = false,
    "data-testid": testId,
    ...rest
  } = props;

  const labelId = `${label?.replace(/\s+/g, "-").toLowerCase()}-label`;

  return (
    <StyledFormControl
      ref={ref}
      fullWidth={fullWidth}
      size={size}
      error={error}
      required={required}
      data-testid={`${testId}-container`}
    >
      {label && <InputLabel id={labelId}>{label}</InputLabel>}
      <MuiSelect
        labelId={label ? labelId : undefined}
        label={label}
        data-testid={testId}
        variant="outlined"
        {...rest}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            data-testid={`${testId}-option-${option.value}`}
          >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
});

Select.displayName = "Select";

export default Select;
