import { getCssValues } from "../../utils/helpers/get-css-values";

import styles from "./index.module.css";

export const Item = ({
  image,
  type,
  diff,
  startEvent,
}: {
  startEvent: boolean;
  image: string;
  type: string;
  diff: number;
}) => {
  return (
    <div
      className={`${styles.item} ${styles[type]}`}
      style={getCssValues(type, diff, startEvent, 100)}
    >
      <img src={image} />
    </div>
  );
};
