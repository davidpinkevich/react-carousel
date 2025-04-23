import styles from "./index.module.css";

export const Typography = ({
  text,
  type,
}: {
  text: string;
  type: "h1" | "h2";
}) => {
  if (type === "h1") return <h1 className={styles.typographyTitle}>{text}</h1>;

  return <h2 className={styles.typographySubtitle}>{text}</h2>;
};
