import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Expense } from "@/expenseReducer";
import { addExpense } from "@/action/expenseActions";

const ExpenseForm: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newExpense: Expense = {
      id: Math.random().toString(),
      amount: parseFloat(amount),
      description,
      date,
    };
    dispatch(addExpense(newExpense));
    setAmount("");
    setDescription("");
    setDate("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Add Expense" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default ExpenseForm;
