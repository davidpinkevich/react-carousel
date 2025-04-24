import { getDifference } from "./get-difference";
import { getMaxWidth } from "./get-max-width";

type PositionTypes =
  | "center"
  | "subcenterLeft"
  | "subcenterRight"
  | "outsideLeft"
  | "outsideRight";

export const getCssValues = (
  type: string,
  diff: number,
  startEvent: boolean,
  distance: number,
  size: number
) => {
  if (!startEvent) return {};

  const obj = {
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

  const transition = "all 0s";

  switch (type) {
    case "center":
      return {
        left: getDifference(
          diff,
          obj.left[getMaxWidth(size)]["center"],
          obj.left[getMaxWidth(size)]["subcenterLeft"],
          obj.left[getMaxWidth(size)]["center"],
          obj.left[getMaxWidth(size)]["subcenterRight"],
          distance
        ),
        transform: `scale(${getDifference(
          diff,
          obj.transform["center"].fromLeft,
          obj.transform["center"].toLeft,
          obj.transform["center"].fromRight,
          obj.transform["center"].toRight,
          distance
        )})`,
        transformOrigin: "left center",
        transition,
        cursor: startEvent ? "grabbing" : "grab",
      };
    case "subcenterLeft":
      return {
        left: getDifference(
          diff,
          obj.left[getMaxWidth(size)]["subcenterLeft"],
          obj.left[getMaxWidth(size)]["outsideLeft"],
          obj.left[getMaxWidth(size)]["subcenterLeft"],
          obj.left[getMaxWidth(size)]["center"],
          distance
        ),
        transform: `scale(${getDifference(
          diff,
          obj.transform["subcenterLeft"].fromLeft,
          obj.transform["subcenterLeft"].toLeft,
          obj.transform["subcenterLeft"].fromRight,
          obj.transform["subcenterLeft"].toRight,
          distance
        )})`,
        transition,
      };
    case "subcenterRight":
      return {
        left: getDifference(
          diff,
          obj.left[getMaxWidth(size)]["subcenterRight"],
          obj.left[getMaxWidth(size)]["center"],
          obj.left[getMaxWidth(size)]["subcenterRight"],
          obj.left[getMaxWidth(size)]["outsideRight"],
          distance
        ),
        transform: `scale(${getDifference(
          diff,
          obj.transform["subcenterRight"].fromLeft,
          obj.transform["subcenterRight"].toLeft,
          obj.transform["subcenterRight"].fromRight,
          obj.transform["subcenterRight"].toRight,
          distance
        )})`,
        transition,
      };
    case "outsideLeft":
      return {
        left: getDifference(
          diff,
          obj.left[getMaxWidth(size)]["outsideLeft"],
          obj.left[getMaxWidth(size)]["outsideRight"],
          obj.left[getMaxWidth(size)]["outsideLeft"],
          obj.left[getMaxWidth(size)]["subcenterLeft"],
          distance
        ),
        transform: `scale(${getDifference(
          diff,
          obj.transform["outsideLeft"].fromLeft,
          obj.transform["outsideLeft"].toLeft,
          obj.transform["outsideLeft"].fromRight,
          obj.transform["outsideLeft"].toRight,
          distance
        )})`,
        transition,
        zIndex: diff < 0 ? 1 : -1,
      };
    case "outsideRight":
      return {
        left: getDifference(
          diff,
          obj.left[getMaxWidth(size)]["outsideRight"],
          obj.left[getMaxWidth(size)]["subcenterRight"],
          obj.left[getMaxWidth(size)]["outsideRight"],
          obj.left[getMaxWidth(size)]["subcenterLeft"],
          distance
        ),
        transform: `scale(${getDifference(
          diff,
          obj.transform["outsideRight"].fromLeft,
          obj.transform["outsideRight"].toLeft,
          obj.transform["outsideRight"].fromRight,
          obj.transform["outsideRight"].toRight,
          distance
        )})`,
        transition,
        zIndex: diff > 0 ? 1 : -1,
      };
  }
};
