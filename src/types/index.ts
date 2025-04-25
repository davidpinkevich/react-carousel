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
