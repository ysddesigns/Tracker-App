import { useRouter } from "expo-router";
import { Button } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Button
      title="Go to Expenses"
      onPress={() => router.push("/screen/expensesScreen")}
    />
  );
}
