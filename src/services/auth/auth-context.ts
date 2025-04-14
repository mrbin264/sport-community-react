"use client";

import { Tokens } from "@/services/api/types/tokens";
import { User } from "@/services/api/types/user";
import { createContext } from "react";

export type TokensInfo = Tokens | null;

export type LoginResult = {
  success: boolean;
  user?: User;
  error?: string;
};

export const AuthContext = createContext<{
  user: User | null;
  isLoaded: boolean;
}>({
  user: null,
  isLoaded: true,
});

export const AuthActionsContext = createContext<{
  setUser: (user: User) => void;
  logOut: () => Promise<void>;
  login: (email: string, password: string) => Promise<LoginResult>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<LoginResult>;
  googleLogin: (token: string) => Promise<LoginResult>;
  facebookLogin: (token: string) => Promise<LoginResult>;
}>({
  setUser: () => {},
  logOut: async () => {},
  login: async () => ({ success: false }),
  register: async () => ({ success: false }),
  googleLogin: async () => ({ success: false }),
  facebookLogin: async () => ({ success: false }),
});

export const AuthTokensContext = createContext<{
  setTokensInfo: (tokensInfo: TokensInfo) => void;
}>({
  setTokensInfo: () => {},
});
