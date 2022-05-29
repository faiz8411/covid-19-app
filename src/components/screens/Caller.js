import React from 'react';
import { Button, Pressable, Text, View } from "react-native";

export default function Caller() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Pressable
        style={{
          color: "white",
          backgroundColor: "#FF4D58",
          height: 30,
          width: 120,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white" }}>I'm pressable!</Text>
      </Pressable>
      <Button
        style={{ width: 40 }}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}