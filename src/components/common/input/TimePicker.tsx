"use client";

import React, { forwardRef } from "react";
import {
  TimePicker as MuiTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { styled } from "@mui/material/styles";
import enUS from "date-fns/locale/en-US";
import { Locale } from "date-fns";

export interface TimePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  minTime?: Date;
  maxTime?: Date;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  helperText?: string;
  format?: string;
  required?: boolean;
  fullWidth?: boolean;
  locale?: Locale;
  placeholder?: string;
  ampm?: boolean;
  "data-testid"?: string;
}

const StyledTimePicker = styled(MuiTimePicker)(({ theme }) => ({
  width: "100%",
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
 * Reusable TimePicker component that wraps MUI TimePicker
 */
const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>((props, ref) => {
  const {
    label,
    value,
    onChange,
    minTime,
    maxTime,
    disabled = false,
    readOnly = false,
    error = false,
    helperText,
    format = "hh:mm a",
    required = false,
    fullWidth = true,
    locale = enUS,
    placeholder,
    ampm = true,
    "data-testid": testId,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locale}>
      <StyledTimePicker
        ref={ref}
        label={label}
        value={value}
        onChange={onChange}
        minTime={minTime}
        maxTime={maxTime}
        disabled={disabled}
        readOnly={readOnly}
        format={format}
        ampm={ampm}
        slotProps={{
          textField: {
            fullWidth: fullWidth,
            required: required,
            error: error,
            helperText: helperText,
            placeholder: placeholder,
            InputProps: {
              readOnly: readOnly,
            },
            inputProps: {
              "data-testid": testId,
            },
          },
        }}
      />
    </LocalizationProvider>
  );
});

TimePicker.displayName = "TimePicker";

export default TimePicker;
