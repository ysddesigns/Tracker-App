import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import expenseReducer from "./expenseReducer";

const rootReducer = combineReducers({
  expenses: expenseReducer,
});

const store = createStore(rootReducer);

export default store;
