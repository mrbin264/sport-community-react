import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import TimePicker, { TimePickerProps } from "./TimePicker";
import Stack from "@mui/material/Stack";
import { setHours, setMinutes } from "date-fns";

const meta: Meta<typeof TimePicker> = {
  title: "Common/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const [time, setTime] = useState<Date | null>(context.args.value || null);
      return (
        <div style={{ width: "300px" }}>
          {Story({
            args: {
              ...context.args,
              value: time,
              onChange: (newTime: Date | null) => {
                setTime(newTime);
                if (context.args.onChange) {
                  context.args.onChange(newTime);
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
type Story = StoryObj<TimePickerProps>;

// Basic TimePicker
export const Basic: Story = {
  args: {
    label: "Select Time",
    value: new Date(),
  },
};

// TimePicker with Error
export const WithError: Story = {
  args: {
    label: "Select Time",
    value: new Date(),
    error: true,
    helperText: "Please select a valid time",
  },
};

// Disabled TimePicker
export const Disabled: Story = {
  args: {
    label: "Disabled TimePicker",
    value: new Date(),
    disabled: true,
  },
};

// 24-Hour Format
export const Format24h: Story = {
  args: {
    label: "24-hour Format",
    value: new Date(),
    format: "HH:mm",
    ampm: false,
  },
};

// Time Range Example
export const TimeRange: StoryObj<TimePickerProps> = {
  render: () => {
    const today = new Date();
    const [startTime, setStartTime] = useState<Date | null>(
      setHours(setMinutes(today, 0), 9)
    );
    const [endTime, setEndTime] = useState<Date | null>(
      setHours(setMinutes(today, 0), 17)
    );

    return (
      <Stack spacing={3}>
        <TimePicker
          label="Start Time"
          value={startTime}
          onChange={setStartTime}
          maxTime={endTime || undefined}
        />
        <TimePicker
          label="End Time"
          value={endTime}
          onChange={setEndTime}
          minTime={startTime || undefined}
        />
      </Stack>
    );
  },
};

// With Time Restrictions
export const WithRestrictions: Story = {
  args: {
    label: "Business Hours (9 AM - 5 PM)",
    value: new Date(),
    minTime: setHours(setMinutes(new Date(), 0), 9),
    maxTime: setHours(setMinutes(new Date(), 0), 17),
  },
};

// AM/PM Toggle
export const AMPMToggle: StoryObj<TimePickerProps> = {
  render: () => {
    const [showAMPM, setShowAMPM] = useState(true);
    const [time, setTime] = useState<Date | null>(new Date());

    return (
      <Stack spacing={3}>
        <TimePicker
          label={showAMPM ? "With AM/PM (12-hour)" : "Without AM/PM (24-hour)"}
          value={time}
          onChange={setTime}
          ampm={showAMPM}
          format={showAMPM ? "hh:mm a" : "HH:mm"}
        />
        <button onClick={() => setShowAMPM(!showAMPM)}>
          Toggle {showAMPM ? "to 24h" : "to AM/PM"}
        </button>
      </Stack>
    );
  },
};
