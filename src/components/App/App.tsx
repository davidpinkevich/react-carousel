import { Typography } from "../Typography";
import { Swiper } from "../Swiper";

import { ROWS_ITEMS, TITILE_TEXT, SUBTITILE_TEXT } from "../../constants";

import styles from "./index.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <Typography text={TITILE_TEXT} type="h1" />
      <Typography text={SUBTITILE_TEXT} type="h2" />
      <Swiper rowItems={ROWS_ITEMS} />
    </div>
  );
};
