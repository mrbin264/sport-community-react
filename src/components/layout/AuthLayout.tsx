"use client";

import { useTranslation } from "@/services/i18n/client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@/components/link";
import { PropsWithChildren } from "react";
import ThemeSwitchButton from "@/components/switch-theme-button";

interface AuthLayoutProps extends PropsWithChildren {
  /**
   * Title to display at the top of the auth form
   */
  title?: string;
}

function AuthLayout({ children, title }: AuthLayoutProps) {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
        px: 2,
        bgcolor: (theme) =>
          theme.palette.mode === "light" ? "grey.100" : "background.default",
      }}
    >
      {/* Theme toggle in top right corner */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <ThemeSwitchButton />
      </Box>

      {/* Logo/Home link in top left */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "primary.main",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          {t("common:app-name")}
        </Typography>
      </Box>

      {/* Auth form container */}
      <Container maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {title && (
            <Typography component="h1" variant="h5" gutterBottom>
              {title}
            </Typography>
          )}
          {children}
        </Paper>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          py: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {`© ${currentYear} ${t("common:app-name")}. ${t("common:footer.allRightsReserved", "All rights reserved.")}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default AuthLayout;
