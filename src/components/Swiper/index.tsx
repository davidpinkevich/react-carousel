import { useState } from "react";
import { Item } from "../Item";
import { ButtonsSwipe } from "../ButtonsSwipe";
import styles from "./index.module.css";
import { getTypeItem } from "../../utils/helpers/get-type-item";

export const Swiper = ({ rowItems }: { rowItems: string[] }) => {
  const rowLength = rowItems.length;
  const center = Math.floor(rowLength / 2);
  const [currentSlide, setCurrentSlide] = useState(center);

  const [startEvent, setStartEvent] = useState(false);
  const [pointA, setPointA] = useState(0);
  const [pointB, setPointB] = useState(0);

  const handleStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setStartEvent(true);
    setPointA(e.clientX);
    setPointB(e.clientX);
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startEvent) {
      setPointB(e.clientX);
      if (pointA - pointB > 100) {
        setStartEvent(false);
        handleClickRight();
      }

      if (pointA - pointB < -100) {
        setStartEvent(false);
        handleClickLeft();
      }
    }
  };

  const handleEnd = () => {
    setStartEvent(false);
  };

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
      <div
        className={styles.swiper}
        onPointerDown={handleStart}
        onPointerMove={handleMove}
        onPointerUp={handleEnd}
      >
        {rowItems.map((item, i) => (
          <Item
            key={i}
            image={item}
            startEvent={startEvent}
            diff={pointA - pointB}
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
