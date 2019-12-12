import { INCREMENT, DECREMENT, RESET } from '../actionTypes'

export default function countReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
        return { ...state, ...action.payload};
    case DECREMENT:
      return { ...state, ...action.payload};
    case RESET:
      return { ...state, bananas: 0, oranges: 0, apples: 0 };
    default:
      return state;
  }
}