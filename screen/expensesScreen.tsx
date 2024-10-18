import ExpenseForm from "@/components/expenseForm";
import ExpenseList from "@/components/expenseList";
import React from "react";
import { View } from "react-native";

const ExpensesScreen: React.FC = () => {
  return (
    <View>
      <ExpenseForm />
      <ExpenseList />
    </View>
  );
};

export default ExpensesScreen;
