"use client";

import { User } from "@/services/api/types/user";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  AuthActionsContext,
  AuthContext,
  AuthTokensContext,
  TokensInfo,
} from "./auth-context";
import useFetch from "@/services/api/use-fetch";
import { AUTH_LOGOUT_URL, AUTH_ME_URL } from "@/services/api/config";
import HTTP_CODES_ENUM from "../api/types/http-codes";
import {
  getTokensInfo,
  setTokensInfo as setTokensInfoToStorage,
} from "./auth-tokens-info";
import {
  useAuthLoginService,
  useAuthSignUpService,
  useAuthGoogleLoginService,
  useAuthFacebookLoginService,
} from "../api/services/auth";

function AuthProvider(props: PropsWithChildren<{}>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const fetchBase = useFetch();
  const loginService = useAuthLoginService();
  const signUpService = useAuthSignUpService();
  const googleLoginService = useAuthGoogleLoginService();
  const facebookLoginService = useAuthFacebookLoginService();

  const setTokensInfo = useCallback((tokensInfo: TokensInfo) => {
    setTokensInfoToStorage(tokensInfo);

    if (!tokensInfo) {
      setUser(null);
    }
  }, []);

  const logOut = useCallback(async () => {
    const tokens = getTokensInfo();

    if (tokens?.token) {
      try {
        await fetchBase(AUTH_LOGOUT_URL, {
          method: "POST",
        });
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        setTokensInfo(null);
      }
    } else {
      setTokensInfo(null);
    }
  }, [setTokensInfo, fetchBase]);

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const data = await loginService(email, password);

        if (data.token && data.user) {
          const tokensInfo = {
            token: data.token,
            refreshToken: data.refreshToken,
            tokenExpires: Date.now() + 3600 * 1000, // Default to 1 hour if not provided by API
          };

          setTokensInfo(tokensInfo);
          setUser(data.user);
          return { success: true, user: data.user };
        } else {
          return {
            success: false,
            error: data.message || "Login failed",
          };
        }
      } catch (error) {
        console.error("Login error:", error);
        return {
          success: false,
          error: "An error occurred during login",
        };
      }
    },
    [loginService, setTokensInfo]
  );

  const register = useCallback(
    async (
      email: string,
      password: string,
      firstName: string,
      lastName: string
    ) => {
      try {
        const data = await signUpService(email, password, firstName, lastName);

        if (data.token && data.user) {
          const tokensInfo = {
            token: data.token,
            refreshToken: data.refreshToken,
            tokenExpires: Date.now() + 3600 * 1000, // Default to 1 hour if not provided by API
          };

          setTokensInfo(tokensInfo);
          setUser(data.user);
          return { success: true, user: data.user };
        } else {
          return {
            success: false,
            error: data.message || "Registration failed",
          };
        }
      } catch (error) {
        console.error("Registration error:", error);
        return {
          success: false,
          error: "An error occurred during registration",
        };
      }
    },
    [signUpService, setTokensInfo]
  );

  const googleLogin = useCallback(
    async (token: string) => {
      try {
        const data = await googleLoginService(token);

        if (data.token && data.user) {
          const tokensInfo = {
            token: data.token,
            refreshToken: data.refreshToken,
            tokenExpires: Date.now() + 3600 * 1000, // Default to 1 hour if not provided by API
          };

          setTokensInfo(tokensInfo);
          setUser(data.user);
          return { success: true, user: data.user };
        } else {
          return {
            success: false,
            error: data.message || "Google login failed",
          };
        }
      } catch (error) {
        console.error("Google login error:", error);
        return {
          success: false,
          error: "An error occurred during Google login",
        };
      }
    },
    [googleLoginService, setTokensInfo]
  );

  const facebookLogin = useCallback(
    async (token: string) => {
      try {
        const data = await facebookLoginService(token);

        if (data.token && data.user) {
          const tokensInfo = {
            token: data.token,
            refreshToken: data.refreshToken,
            tokenExpires: Date.now() + 3600 * 1000, // Default to 1 hour if not provided by API
          };

          setTokensInfo(tokensInfo);
          setUser(data.user);
          return { success: true, user: data.user };
        } else {
          return {
            success: false,
            error: data.message || "Facebook login failed",
          };
        }
      } catch (error) {
        console.error("Facebook login error:", error);
        return {
          success: false,
          error: "An error occurred during Facebook login",
        };
      }
    },
    [facebookLoginService, setTokensInfo]
  );

  const loadData = useCallback(async () => {
    const tokens = getTokensInfo();

    try {
      if (tokens?.token) {
        const response = await fetchBase(AUTH_ME_URL, {
          method: "GET",
        });

        if (response.status === HTTP_CODES_ENUM.UNAUTHORIZED) {
          logOut();
          return;
        }

        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      logOut();
    } finally {
      setIsLoaded(true);
    }
  }, [fetchBase, logOut]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const contextValue = useMemo(
    () => ({
      isLoaded,
      user,
    }),
    [isLoaded, user]
  );

  const contextActionsValue = useMemo(
    () => ({
      setUser,
      logOut,
      login,
      register,
      googleLogin,
      facebookLogin,
    }),
    [logOut, login, register, googleLogin, facebookLogin]
  );

  const contextTokensValue = useMemo(
    () => ({
      setTokensInfo,
    }),
    [setTokensInfo]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <AuthActionsContext.Provider value={contextActionsValue}>
        <AuthTokensContext.Provider value={contextTokensValue}>
          {props.children}
        </AuthTokensContext.Provider>
      </AuthActionsContext.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
