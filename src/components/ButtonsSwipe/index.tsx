import styles from "./index.module.css";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

export const ButtonsSwipe = ({
  current,
  rowItems,
  onClickCircle,
  onClickLeft,
  onClickRight,
}: {
  rowItems: string[];
  current: number;
  onClickCircle: (id: number) => void;
  onClickLeft: () => void;
  onClickRight: () => void;
}) => {
  return (
    <div className={styles.rowButtons}>
      <button className={styles.arrowBtn} onClick={onClickLeft}>
        <img src={arrowLeft} />
      </button>
      {rowItems.map((item, i) => (
        <button
          key={item}
          className={`${styles.btn} ${current === i ? styles.active : ""}`}
          onClick={() => onClickCircle(i)}
        />
      ))}
      <button className={styles.arrowBtn} onClick={onClickRight}>
        <img src={arrowRight} />
      </button>
    </div>
  );
};
