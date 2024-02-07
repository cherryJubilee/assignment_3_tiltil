"use client";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  username: string | null;
  setUsername: Dispatch<SetStateAction<string | null>>;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  username: null,
  setUsername: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const value: AuthContextValue = {
    isLoggedIn,
    setIsLoggedIn,
    username,
    setUsername,
  };

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [router, isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
