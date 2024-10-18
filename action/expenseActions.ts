import { Expense } from "@/expenseReducer";

export const addExpense = (expense: Expense) => {
  return {
    type: "ADD_EXPENSE",
    payload: expense,
  };
};
