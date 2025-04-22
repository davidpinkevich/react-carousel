import { useState } from "react";
import { Item } from "../Item";

import { getTypeItem } from "../../utils/helpers/getTypeItem";

import styles from "./index.module.css";

export const Row = ({ rowItems }: { rowItems: string[] }) => {
  const rowLength = rowItems.length;
  const center = Math.floor(rowLength / 2);
  const [startX, setStartX] = useState(-center * 800 + 200);
  const [initialX, setInitialX] = useState(0);
  const [startEvent, setStartEvent] = useState(false);

  const [pointA, setPointA] = useState(0);
  const [pointB, setPointB] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(center);

  const handleStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setStartEvent(true);
    setInitialX(e.clientX - startX);
    setPointA(e.clientX);
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startEvent) {
      const newStartX = e.clientX - initialX;
      setStartX(newStartX);
      setPointB(e.clientX);
    }
  };

  const handleEnd = () => {
    setStartEvent(false);
    const diff = pointA - pointB;

    if (diff > 20 && currentSlide + 1 !== rowLength) {
      setCurrentSlide(currentSlide + 1);
      setStartX(-(currentSlide + 1) * 800 + 200);
    }
    if (diff > 20 && currentSlide + 1 === rowLength) {
      setStartX(-currentSlide * 800 + 200);
    }

    if (diff < 20 && currentSlide - 1 !== -1) {
      setCurrentSlide(currentSlide - 1);
      setStartX(-(currentSlide - 1) * 800 + 200);
    }
    if (diff < 20 && currentSlide - 1 === -1) {
      setStartX(-currentSlide * 800 + 200);
    }
  };

  return (
    <div
      onPointerDown={handleStart}
      onPointerMove={handleMove}
      onPointerUp={handleEnd}
      className={styles.row}
      style={{ transform: `translateX(${startX}px)` }}
    >
      {rowItems.map((item, i) => (
        <Item key={i} image={item} type={getTypeItem(currentSlide, i)} />
      ))}
    </div>
  );
};
