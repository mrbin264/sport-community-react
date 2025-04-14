"use client";

import React from "react";
import MuiCard from "@mui/material/Card";
import type { CardProps as MuiCardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

/**
 * Extended Card Props with additional properties
 */
export interface CardProps extends Omit<MuiCardProps, "title"> {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  image?: string;
  imageHeight?: string | number;
  imageAlt?: string;
  contentPadding?: boolean;
  actions?: React.ReactNode;
  elevated?: boolean;
  "data-testid"?: string;
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
  overflow: "hidden",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
}));

/**
 * Reusable Card component that extends MUI Card with additional functionality
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    title,
    subheader,
    image,
    imageHeight = 200,
    imageAlt = "",
    contentPadding = true,
    actions,
    elevated = false,
    "data-testid": testId,
    ...rest
  } = props;

  return (
    <StyledCard
      ref={ref}
      elevation={elevated ? 3 : 1}
      data-testid={testId}
      {...rest}
    >
      {title && <CardHeader title={title} subheader={subheader} />}

      {image && (
        <CardMedia
          component="img"
          height={imageHeight}
          image={image}
          alt={imageAlt}
        />
      )}

      {children && (
        <CardContent sx={{ p: contentPadding ? undefined : 0 }}>
          {children}
        </CardContent>
      )}

      {actions && <CardActions>{actions}</CardActions>}
    </StyledCard>
  );
});

Card.displayName = "Card";

export default Card;
