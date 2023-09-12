import { combineReducers } from "redux";
import _permisions from "./reducers/permissions/reducer"
import users from "./reducers/users/reducer";
import products from "./reducers/products/reducer";
import categories from "./reducers/categories/reducer";

export const rootReducer = combineReducers({
  _permissions: _permisions,
  users: users,
  products: products,
  categories: categories,



});
