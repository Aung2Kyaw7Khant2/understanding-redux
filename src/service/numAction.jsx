import { INCREASE_NUM, DECREASE_NUM } from "./numActionTypes";

export function increaseNum() {
  return {
    type: INCREASE_NUM,
  };
}

export function decreaseNum() {
  return {
    type: DECREASE_NUM,
  };
}
