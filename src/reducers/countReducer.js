import { INCREMENT, DECREMENT } from '../actionTypes'

export default function countReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, ...action.payload};
    case DECREMENT:
      return { ...state, ...action.payload};
    default:
      return state;
  }
}