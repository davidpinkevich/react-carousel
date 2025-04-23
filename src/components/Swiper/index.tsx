import { useState } from "react";
import { Item } from "../Item";
import { ButtonsSwipe } from "../ButtonsSwipe";
import styles from "./index.module.css";
import { getTypeItem } from "../../utils/helpers/getTypeItem";

export const Swiper = ({ rowItems }: { rowItems: string[] }) => {
  const rowLength = rowItems.length;
  const center = Math.floor(rowLength / 2);
  const [currentSlide, setCurrentSlide] = useState(center);

  const handleClickLeft = () => {
    setCurrentSlide((prev) => (prev === 0 ? rowLength - 1 : prev - 1));
  };

  const handleClickRight = () => {
    setCurrentSlide((prev) => (prev === rowLength - 1 ? 0 : prev + 1));
  };

  const handleClick = (id: number) => {
    setCurrentSlide(id);
  };

  return (
    <>
      <div className={styles.swiper}>
        {rowItems.map((item, i) => (
          <Item
            key={i}
            image={item}
            type={getTypeItem(i, currentSlide, rowLength)}
          />
        ))}
      </div>
      <ButtonsSwipe
        rowItems={rowItems}
        current={currentSlide}
        onClickCircle={handleClick}
        onClickLeft={handleClickLeft}
        onClickRight={handleClickRight}
      />
    </>
  );
};
