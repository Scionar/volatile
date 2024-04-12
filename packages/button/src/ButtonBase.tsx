import React from "react";
import styles from "../src/Button.module.css";

type ButtonBaseProps = {
  children: string;
  disabled?: boolean;
};

export const ButtonBase: React.FunctionComponent<ButtonBaseProps> = ({
  children,
  disabled = false,
}) => {
  return (
    <button className={styles.root} disabled={disabled}>
      {children}
    </button>
  );
};
