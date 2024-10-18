export interface Expense {
  id: string;
  amount: number;
  description: string;
  date: string;
}

interface ExpenseState {
  expenses: Expense[];
}

const initialState: ExpenseState = {
  expenses: [],
};

type Action = { type: "ADD_EXPENSE"; payload: Expense };

const expenseReducer = (state = initialState, action: Action): ExpenseState => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

export default expenseReducer;
