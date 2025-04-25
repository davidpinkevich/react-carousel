import { Swiper } from "../Swiper";
import { Typography } from "../Typography";

import { ROWS_ITEMS, Subtitle, TITILE_TEXT } from "../../constants";

import styles from "./index.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <Typography type="h1">{TITILE_TEXT}</Typography>
      <Typography type="h2">
        <Subtitle />
      </Typography>
      <Swiper rowItems={ROWS_ITEMS} />
    </div>
  );
};
