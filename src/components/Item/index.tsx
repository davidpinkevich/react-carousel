import styles from "./index.module.css";

export const Item = ({ image, type }: { image: string; type: string }) => {
  console.log("render ITEM", type, image);
  return (
    <div className={`${styles.item} ${styles[type]}`}>
      <img src={image} />
    </div>
  );
};
