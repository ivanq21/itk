import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import menuReducer from "./menuReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  menu: menuReducer
});

let store = createStore(reducers);

export default store;