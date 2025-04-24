import { getDifference } from "./get-difference";

export const getCssValues = (
  type: string,
  diff: number,
  startEvent: boolean,
  distance: number
) => {
  if (!startEvent) return {};

  const transition = "all 0s";

  switch (type) {
    case "center":
      return {
        left: getDifference(diff, 200, 64, 200, 496, distance),
        transform: `scale(${getDifference(diff, 1, 0.8, 1, 0.8, distance)})`,
        transformOrigin: "left center",
        transition,
        cursor: startEvent ? "grabbing" : "grab",
      };
    case "subcenterRight":
      return {
        left: getDifference(diff, 496, 200, 496, 720, distance),
        transform: `scale(${getDifference(diff, 0.8, 1, 0.8, 0.6, distance)})`,
        transition,
      };
    case "subcenterLeft":
      return {
        left: getDifference(diff, 64, 0, 64, 200, distance),
        transform: `scale(${getDifference(diff, 0.8, 0.6, 0.8, 1, distance)})`,
        transition,
      };
    case "outsideRight":
      return {
        left: getDifference(diff, 720, 496, 720, 0, distance),
        transform: `scale(${getDifference(
          diff,
          0.6,
          0.8,
          0.6,
          0.6,
          distance
        )})`,
        transition,
        zIndex: diff > 0 ? 1 : -1,
      };
    case "outsideLeft":
      return {
        left: getDifference(diff, 0, 720, 0, 64, distance),
        transform: `scale(${getDifference(
          diff,
          0.6,
          0.6,
          0.6,
          0.8,
          distance
        )})`,
        transition,
        zIndex: diff < 0 ? 1 : -1,
      };
  }
};
