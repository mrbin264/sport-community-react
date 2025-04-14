"use client";

import React, { forwardRef } from "react";
import {
  DatePicker as MuiDatePicker,
  DateView,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { styled } from "@mui/material/styles";
import enUS from "date-fns/locale/en-US";
import { Locale } from "date-fns";

export interface DatePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  helperText?: string;
  views?: readonly DateView[];
  format?: string;
  disableFuture?: boolean;
  disablePast?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  locale?: Locale;
  placeholder?: string;
  "data-testid"?: string;
}

const StyledDatePicker = styled(MuiDatePicker)(({ theme }) => ({
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
 * Reusable DatePicker component that wraps MUI DatePicker
 */
const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const {
    label,
    value,
    onChange,
    minDate,
    maxDate,
    disabled = false,
    readOnly = false,
    error = false,
    helperText,
    views,
    format = "MM/dd/yyyy",
    disableFuture = false,
    disablePast = false,
    required = false,
    fullWidth = true,
    locale = enUS,
    placeholder,
    "data-testid": testId,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locale}>
      <StyledDatePicker
        ref={ref}
        label={label}
        value={value}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        readOnly={readOnly}
        views={views}
        format={format}
        disableFuture={disableFuture}
        disablePast={disablePast}
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

DatePicker.displayName = "DatePicker";

export default DatePicker;
