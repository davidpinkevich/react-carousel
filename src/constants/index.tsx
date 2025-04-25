import image1 from "../assets/images/1.webp";
import image2 from "../assets/images/2.webp";
import image3 from "../assets/images/3.webp";
import image4 from "../assets/images/4.webp";
import image5 from "../assets/images/5.webp";

import { type ChangedPositionTypes } from "../types";

export const ROWS_ITEMS = [image1, image2, image3, image4, image5];

export const TITILE_TEXT = "Simple Image Carousel";

export const Subtitle = () => {
  return (
    <>
      5 x Image items ❖ <span>Carousel</span>
      <br /> Interactive Components & Variants
    </>
  );
};

export const DISTANCE_ANIMATION = 100;

export const ROUTES: ChangedPositionTypes = {
  center: ["center", "subcenterLeft", "center", "subcenterRight"],
  subcenterLeft: ["subcenterLeft", "outsideLeft", "subcenterLeft", "center"],
  subcenterRight: [
    "subcenterRight",
    "center",
    "subcenterRight",
    "outsideRight",
  ],
  outsideLeft: ["outsideLeft", "outsideRight", "outsideLeft", "subcenterLeft"],
  outsideRight: [
    "outsideRight",
    "subcenterRight",
    "outsideRight",
    "subcenterLeft",
  ],
};

export const animationParams = {
  left: {
    max: {
      center: 200,
      subcenterLeft: 64,
      subcenterRight: 496,
      outsideLeft: 0,
      outsideRight: 720,
    },
    1260: {
      center: 200,
      subcenterLeft: 84,
      subcenterRight: 436,
      outsideLeft: 0,
      outsideRight: 640,
    },
    1020: {
      center: 150,
      subcenterLeft: 64,
      subcenterRight: 336,
      outsideLeft: 0,
      outsideRight: 500,
    },
    820: {
      center: 50,
      subcenterLeft: 25,
      subcenterRight: 175,
      outsideLeft: 0,
      outsideRight: 300,
    },
    620: {
      center: 37.5,
      subcenterLeft: 25,
      subcenterRight: 110,
      outsideLeft: 10,
      outsideRight: 185,
    },
  },
  transform: {
    center: {
      fromLeft: 1,
      toLeft: 0.8,
      fromRight: 1,
      toRight: 0.8,
    },
    subcenterLeft: {
      fromLeft: 0.8,
      toLeft: 0.6,
      fromRight: 0.8,
      toRight: 1,
    },
    subcenterRight: {
      fromLeft: 0.8,
      toLeft: 1,
      fromRight: 0.8,
      toRight: 0.6,
    },
    outsideLeft: {
      fromLeft: 0.6,
      toLeft: 0.6,
      fromRight: 0.6,
      toRight: 0.8,
    },
    outsideRight: {
      fromLeft: 0.6,
      toLeft: 0.8,
      fromRight: 0.6,
      toRight: 0.6,
    },
  },
};
