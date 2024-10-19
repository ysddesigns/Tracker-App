import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const Explore = () => {
  return (
    <View>
      <Text>Explore</Text>
      <Button title="click" onPress={() => router.push("/settings")} />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
