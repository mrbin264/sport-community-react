"use client";

import { useTranslation } from "@/services/i18n/client";
import ResponsiveAppBar from "@/components/app-bar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { PropsWithChildren } from "react";

interface MainLayoutProps extends PropsWithChildren {
  /**
   * Whether to use a container with max width
   * @default true
   */
  useContainer?: boolean;
  /**
   * Maximum width of the container
   * @default "lg"
   */
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

function MainLayout({
  children,
  useContainer = true,
  maxWidth = "lg",
}: MainLayoutProps) {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <ResponsiveAppBar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        {useContainer ? (
          <Container maxWidth={maxWidth}>{children}</Container>
        ) : (
          children
        )}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            {`© ${currentYear} ${t("common:app-name")}. ${t("common:footer.allRightsReserved", "All rights reserved.")}`}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default MainLayout;
