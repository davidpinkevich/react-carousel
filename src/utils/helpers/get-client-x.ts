export const getClientX = (e: React.MouseEvent | React.TouchEvent): number => {
  if ("touches" in e) {
    return e.touches[0].clientX;
  }
  return e.clientX;
};
