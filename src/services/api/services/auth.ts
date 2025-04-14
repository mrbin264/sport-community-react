"use client";

import { API_URL } from "@/services/api/config";
import useFetch from "@/services/api/use-fetch";
import { useCallback } from "react";

// API endpoints
export const AUTH_REGISTER_URL = API_URL + "/v1/auth/register";
export const AUTH_EMAIL_LOGIN_URL = API_URL + "/v1/auth/email/login";
export const AUTH_GOOGLE_LOGIN_URL = API_URL + "/v1/auth/google/login";
export const AUTH_FACEBOOK_LOGIN_URL = API_URL + "/v1/auth/facebook/login";

// Auth Sign Up hook
export function useAuthSignUpService() {
  const fetchBase = useFetch();

  return useCallback(
    async (
      email: string,
      password: string,
      firstName: string,
      lastName: string
    ) => {
      const response = await fetchBase(AUTH_REGISTER_URL, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
        }),
      });

      return await response.json();
    },
    [fetchBase]
  );
}

// Auth Email Login hook
export function useAuthLoginService() {
  const fetchBase = useFetch();

  return useCallback(
    async (formData: { email: string; password: string }) => {
      const response = await fetchBase(AUTH_EMAIL_LOGIN_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      return await response.json();
    },
    [fetchBase]
  );
}

// Auth Google Login hook
export function useAuthGoogleLoginService() {
  const fetchBase = useFetch();

  return useCallback(
    async (token: string) => {
      const response = await fetchBase(AUTH_GOOGLE_LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({ token }),
      });

      return await response.json();
    },
    [fetchBase]
  );
}

// Auth Facebook Login hook
export function useAuthFacebookLoginService() {
  const fetchBase = useFetch();

  return useCallback(
    async (token: string) => {
      const response = await fetchBase(AUTH_FACEBOOK_LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({ token }),
      });

      return await response.json();
    },
    [fetchBase]
  );
}

// Auth Logout hook
export function useAuthLogoutService() {
  const fetchBase = useFetch();

  return useCallback(async () => {
    const response = await fetchBase(API_URL + "/v1/auth/logout", {
      method: "POST",
    });

    return response;
  }, [fetchBase]);
}

// Get current user hook
export function useAuthMeService() {
  const fetchBase = useFetch();

  return useCallback(async () => {
    const response = await fetchBase(API_URL + "/v1/auth/me", {
      method: "GET",
    });

    return await response.json();
  }, [fetchBase]);
}
