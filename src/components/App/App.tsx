import { Swiper } from "../Swiper";
import { Typography } from "../Typography";

import { ROWS_ITEMS, SUBTITILE_TEXT, TITILE_TEXT } from "../../constants";

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
