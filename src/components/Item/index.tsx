import { DISTANCE_ANIMATION } from "../../constants";
import { getCssValues } from "../../utils/helpers/get-css-values";

import { type ItemType } from "../../types";

import styles from "./index.module.css";

export const Item = ({ image, type, diff, size, startEvent }: ItemType) => {
  return (
    <div
      className={`${styles.item} ${styles[type]}`}
      style={getCssValues(type, diff, startEvent, DISTANCE_ANIMATION, size)}
    >
      <img src={image} />
    </div>
  );
};
