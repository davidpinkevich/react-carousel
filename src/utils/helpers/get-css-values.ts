import { createCssAnimation } from "./create-css-animation";

import { ROUTES } from "../../constants";

export const getCssValues = (
  type: string,
  diff: number,
  startEvent: boolean,
  distance: number,
  size: number
) => {
  if (!startEvent) return {};

  const transition = "all 0s";
  const cursor = startEvent ? "grabbing" : "grab";
  const zIndexLeft = diff < 0 ? 1 : -1;
  const zIndexRight = diff < 0 ? -1 : 1;
  const transformOrigin = "left center";

  switch (type) {
    case "center":
      return {
        ...createCssAnimation(...ROUTES["center"], diff, size, distance),
        transformOrigin,
        transition,
        cursor,
      };
    case "subcenterLeft":
      return {
        ...createCssAnimation(...ROUTES["subcenterLeft"], diff, size, distance),
        transition,
        cursor,
      };
    case "subcenterRight":
      return {
        ...createCssAnimation(
          ...ROUTES["subcenterRight"],
          diff,
          size,
          distance
        ),
        transition,
        cursor,
      };
    case "outsideLeft":
      return {
        ...createCssAnimation(...ROUTES["outsideLeft"], diff, size, distance),
        transition,
        cursor,
        zIndex: zIndexLeft,
      };
    case "outsideRight":
      return {
        ...createCssAnimation(...ROUTES["outsideRight"], diff, size, distance),
        transition,
        cursor,
        zIndex: zIndexRight,
      };
  }
};
