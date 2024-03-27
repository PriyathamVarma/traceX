"use client";
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: null,
  login: (userData: any) => {},
  logout: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
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
