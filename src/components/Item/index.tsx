import { getCssValues } from "../../utils/helpers/get-css-values";
import { DISTANCE_ANIMATION } from "../../constants";

import styles from "./index.module.css";

export const Item = ({
  image,
  type,
  diff,
  size,
  startEvent,
}: {
  startEvent: boolean;
  image: string;
  type: string;
  diff: number;
  size: number;
}) => {
  return (
    <div
      className={`${styles.item} ${styles[type]}`}
      style={getCssValues(type, diff, startEvent, DISTANCE_ANIMATION, size)}
    >
      <img src={image} />
    </div>
  );
};
