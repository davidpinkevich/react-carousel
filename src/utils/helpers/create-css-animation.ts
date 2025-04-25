import { getDifference } from "./get-difference";
import { getMaxWidth } from "./get-max-width";

import { animationParams } from "../../constants";

import { type PositionTypes } from "../../types";

export const createCssAnimation = (
  fromLeft: PositionTypes,
  toLeft: PositionTypes,
  fromRight: PositionTypes,
  toRight: PositionTypes,
  diff: number,
  size: number,
  distance: number
) => {
  return {
    left: getDifference(
      diff,
      animationParams.left[getMaxWidth(size)][fromLeft],
      animationParams.left[getMaxWidth(size)][toLeft],
      animationParams.left[getMaxWidth(size)][fromRight],
      animationParams.left[getMaxWidth(size)][toRight],
      distance
    ),
    transform: `scale(${getDifference(
      diff,
      animationParams.transform[fromLeft].fromLeft,
      animationParams.transform[fromLeft].toLeft,
      animationParams.transform[fromLeft].fromRight,
      animationParams.transform[fromLeft].toRight,
      distance
    )})`,
  };
};
