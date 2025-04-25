import { type ReactNode } from "react";

import styles from "./index.module.css";

export const Typography = ({
  children,
  type,
}: {
  children: string | ReactNode;
  type: "h1" | "h2";
}) => {
  if (type === "h1")
    return <h1 className={styles.typographyTitle}>{children}</h1>;

  return <h2 className={styles.typographySubtitle}>{children}</h2>;
};
