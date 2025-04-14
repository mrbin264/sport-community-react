"use client";

import React from "react";
import MuiAvatar from "@mui/material/Avatar";
import type { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export type AvatarVariant = "circular" | "rounded" | "square";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | number;

export interface AvatarProps extends Omit<MuiAvatarProps, "variant"> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  "data-testid"?: string;
}

const sizeMap: Record<string, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 72,
};

const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== "avatarSize" && prop !== "bgColor",
})<{ avatarSize: number | string; bgColor?: string }>(({
  theme,
  avatarSize,
  bgColor,
}) => {
  const size =
    typeof avatarSize === "string"
      ? sizeMap[avatarSize] || sizeMap.md
      : avatarSize;

  return {
    width: size,
    height: size,
    fontSize: `${size * 0.4}px`,
    backgroundColor: bgColor || theme.palette.primary.main,
  };
});

/**
 * Reusable Avatar component that can display an image or initials
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  name = "",
  size = "md",
  variant = "circular",
  "data-testid": testId,
  ...rest
}) => {
  // Generate initials from name
  const getInitials = (name: string) => {
    if (!name) return "";

    return name
      .split(" ")
      .map((part) => part[0])
      .filter(Boolean)
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate consistent color based on name
  const getColorFromName = (name: string) => {
    if (!name) return undefined;

    const colors = [
      "#F44336",
      "#E91E63",
      "#9C27B0",
      "#673AB7",
      "#3F51B5",
      "#2196F3",
      "#03A9F4",
      "#00BCD4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFEB3B",
      "#FFC107",
      "#FF9800",
      "#FF5722",
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  };

  const bgColor = name ? getColorFromName(name) : undefined;
  const initials = name ? getInitials(name) : undefined;

  return (
    <StyledAvatar
      src={src}
      alt={alt}
      variant={variant}
      avatarSize={size}
      bgColor={bgColor}
      data-testid={testId}
      {...rest}
    >
      {!src && initials}
    </StyledAvatar>
  );
};

export default Avatar;
