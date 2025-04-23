export const getTypeItem = (
  index: number,
  currentSlide: number,
  length: number
) => {
  const relativeIndex = (index - currentSlide + length) % length;

  if (relativeIndex === 0) {
    return "center";
  } else if (relativeIndex === 1) {
    return "subcenterRight";
  } else if (relativeIndex === length - 1) {
    return "subcenterLeft";
  } else if (relativeIndex < length / 2) {
    return "outsideRight";
  } else {
    return "outsideLeft";
  }
};
