import { Metadata } from "next";
import PageContent from "./page-content";
import { IS_SIGN_UP_ENABLED } from "@/services/auth/config";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  // Redirect to sign-in if sign up is disabled
  if (!IS_SIGN_UP_ENABLED) {
    redirect("/sign-in");
  }

  return <PageContent />;
}
