import React from "react";

type TextProps = {
  children: string;
};

export const Text: React.FunctionComponent<TextProps> = ({ children }) => {
  return children;
};
