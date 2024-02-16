import { createContext } from "react";

type ThemeContextProps = {
  theme: any;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: {},
});
