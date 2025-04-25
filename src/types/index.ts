export type PositionTypes =
  | "center"
  | "subcenterLeft"
  | "subcenterRight"
  | "outsideLeft"
  | "outsideRight";

export type ChangedPositionTypes = {
  [key in PositionTypes]: [
    PositionTypes,
    PositionTypes,
    PositionTypes,
    PositionTypes
  ];
};

export type ItemType = {
  startEvent: boolean;
  image: string;
  type: string;
  diff: number;
  size: number;
};

export type ButtonsSwipeType = {
  rowItems: string[];
  current: number;
  onClickCircle: (id: number) => void;
  onClickLeft: () => void;
  onClickRight: () => void;
};
