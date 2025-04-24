export const getMaxWidth = (size: number) => {
  if (size > 1260) {
    return "max";
  } else if (size <= 1260 && size > 1020) {
    return "1260";
  } else if (size <= 1020 && size > 820) {
    return "1020";
  } else if (size <= 820 && size > 620) {
    return "820";
  } else {
    return "620";
  }
};
