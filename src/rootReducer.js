import combineReducers from "./combineReducers";
import orderReducer from "./reducers/orderReducer";
import countReducer from "./reducers/countReducer";

/** using combineReducers */
const rootReducer = combineReducers({
  order: orderReducer,
  count: countReducer
});

export default rootReducer;