export const getDifference = (
  x: number,
  startPositive: number,
  endPositive: number,
  startNegative: number,
  endNegative: number,
  max: number
) => {
  if (x >= 0 && x <= max) {
    const diffPositive = (endPositive - startPositive) / max;
    return diffPositive * x + startPositive;
  } else if (x >= -max && x < 0) {
    const diffNegative = (endNegative - startNegative) / -max;
    return diffNegative * x + startNegative;
  } else if (x < -max) {
    return endNegative;
  } else if (x > max) {
    return endPositive;
  }
};
