import React from "react";
import styles from "../src/Text.module.css";

type TextProps = {
  children: string;
};

export const Text: React.FunctionComponent<TextProps> = ({ children }) => {
  return (
    <span
      className={styles.root}
      style={{
        color: "var(--text-body-color)",
      }}
    >
      {children}
    </span>
  );
};
