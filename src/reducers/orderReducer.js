export default function orderReducer(state, action) {
  switch (action.type) {
    case "ADD_ORDER":
      console.log(action.payload)
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
}