import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer);

export default store;
