import React, { ReactNode } from "react";

type ThemeWrapperProps = {
  children: ReactNode;
  theme: string;
};

export const ThemeWrapper: React.FunctionComponent<ThemeWrapperProps> = ({
  children,
  theme,
}) => {
  return <div className={theme}>{children}</div>;
};
