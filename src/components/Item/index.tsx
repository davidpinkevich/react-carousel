import { getCssValues } from "../../utils/helpers/get-css-values";

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
      style={getCssValues(type, diff, startEvent, 100, size)}
    >
      <img src={image} />
    </div>
  );
};
