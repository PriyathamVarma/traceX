"use client";
import React, { createContext, useContext, useState } from "react";
import IUserProfile from "../interfaces/user/user_profile";

const UserContext = createContext<{
  user: IUserProfile | null;
  login: (userData: IUserProfile) => void;
  logout: () => void;
}>({
  user: null,
  login: (userData: any) => {},
  logout: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUserProfile | null>(() => {
    if (typeof localStorage !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } else {
      return null;
    }
  });

  const login = (userData: IUserProfile) => {
    setUser(userData);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("user");
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
