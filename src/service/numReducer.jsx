import { INCREASE_NUM, DECREASE_NUM } from "./numActionTypes";

const initialState = {
  count: 0,
};
const numReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUM:
      return initialState.count + 1;

    case DECREASE_NUM:
      return initialState.count - 1;

    default:
      return state;
  }
};
export default numReducer;
