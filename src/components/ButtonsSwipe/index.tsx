import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

import { type ButtonsSwipeType } from "../../types";

import styles from "./index.module.css";

export const ButtonsSwipe = ({
  current,
  rowItems,
  onClickCircle,
  onClickLeft,
  onClickRight,
}: ButtonsSwipeType) => {
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
