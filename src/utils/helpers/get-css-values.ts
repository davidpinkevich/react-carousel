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

  switch (type) {
    case "center":
      return {
        ...createCssAnimation(...ROUTES["center"], diff, size, distance),
        transformOrigin: "left center",
        transition,
        cursor: startEvent ? "grabbing" : "grab",
      };
    case "subcenterLeft":
      return {
        ...createCssAnimation(...ROUTES["subcenterLeft"], diff, size, distance),
        transition,
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
      };
    case "outsideLeft":
      return {
        ...createCssAnimation(...ROUTES["outsideLeft"], diff, size, distance),
        transition,
        zIndex: diff < 0 ? 1 : -1,
      };
    case "outsideRight":
      return {
        ...createCssAnimation(...ROUTES["outsideRight"], diff, size, distance),
        transition,
        zIndex: diff > 0 ? 1 : -1,
      };
  }
};
