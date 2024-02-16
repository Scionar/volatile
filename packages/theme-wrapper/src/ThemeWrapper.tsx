import React, { ReactNode } from "react";

type ThemeWrapperProps = {
  children: ReactNode;
  theme: {
    textBodyColor?: string;
  };
};

export const ThemeWrapper: React.FunctionComponent<ThemeWrapperProps> = ({
  children,
  theme,
}) => {
  const colors = {
    "--text-body-color": theme.textBodyColor,
  } as React.CSSProperties;

  return <div style={colors}>{children}</div>;
};
