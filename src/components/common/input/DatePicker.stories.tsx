import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import DatePicker, { DatePickerProps } from "./DatePicker";
import Stack from "@mui/material/Stack";
import { addDays, subDays } from "date-fns";

const meta: Meta<typeof DatePicker> = {
  title: "Common/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const [date, setDate] = useState<Date | null>(context.args.value || null);
      return (
        <div style={{ width: "300px" }}>
          {Story({
            args: {
              ...context.args,
              value: date,
              onChange: (newDate: Date | null) => {
                setDate(newDate);
                if (context.args.onChange) {
                  context.args.onChange(newDate);
                }
              },
            },
          })}
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<DatePickerProps>;

// Basic DatePicker
export const Basic: Story = {
  args: {
    label: "Select Date",
    value: new Date(),
  },
};

// DatePicker with Error
export const WithError: Story = {
  args: {
    label: "Select Date",
    value: new Date(),
    error: true,
    helperText: "Please select a valid date",
  },
};

// Disabled DatePicker
export const Disabled: Story = {
  args: {
    label: "Disabled DatePicker",
    value: new Date(),
    disabled: true,
  },
};

// Date Range Example
export const DateRange: StoryObj<DatePickerProps> = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 7));

    return (
      <Stack spacing={3}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={setStartDate}
          maxDate={endDate || undefined}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={setEndDate}
          minDate={startDate || undefined}
        />
      </Stack>
    );
  },
};

// With Date Restrictions
export const WithRestrictions: Story = {
  args: {
    label: "Select Date (±7 days from today)",
    value: new Date(),
    minDate: subDays(new Date(), 7),
    maxDate: addDays(new Date(), 7),
  },
};

// Year and Month Only View
export const YearMonthOnly: Story = {
  args: {
    label: "Select Year & Month",
    value: new Date(),
    views: ["year", "month"],
  },
};

// Disable Past Dates
export const DisablePast: Story = {
  args: {
    label: "Future Dates Only",
    value: new Date(),
    disablePast: true,
  },
};

// Disable Future Dates
export const DisableFuture: Story = {
  args: {
    label: "Past Dates Only",
    value: new Date(),
    disableFuture: true,
  },
};
