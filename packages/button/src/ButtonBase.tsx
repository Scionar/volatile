import React from "react";
import styles from "../src/Button.module.css";

type ButtonBaseProps = {
  children: string;
};

export const ButtonBase: React.FunctionComponent<ButtonBaseProps> = ({
  children,
}) => {
  return <button className={styles.root}>{children}</button>;
};
