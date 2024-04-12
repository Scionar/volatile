import React, { ReactNode } from "react";

type ThemeWrapperProps = {
  children: ReactNode;
  className?: string;
  theme: string;
};

export const ThemeWrapper: React.FunctionComponent<ThemeWrapperProps> = ({
  children,
  className,
  theme,
}) => {
  return <div className={[className, theme].join(" ").trim()}>{children}</div>;
};
