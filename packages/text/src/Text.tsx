import React from "react";

type TextProps = {
  children: string;
};

export const Text: React.FunctionComponent<TextProps> = ({ children }) => {
  return (
    <span
      style={{
        color: "var(--text-body-color)",
      }}
    >
      {children}
    </span>
  );
};
