"use client";

import React, { createContext, PropsWithChildren } from "react";

type ThemeName = "mud" | "sun";

const ThemeContext = createContext<ThemeName>("mud");

export const ThemeProvider: React.FC<
  PropsWithChildren<{ theme: ThemeName }>
> = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => React.useContext(ThemeContext);
export const useIsMudTheme = () => useTheme() === "mud";
export const useIsSunTheme = () => useTheme() === "sun";
