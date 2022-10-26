import { TextInput, View } from "react-native";

import { useAnimatedKeyboard } from "react-native-reanimated";

export default function App() {
  const keyboard = useAnimatedKeyboard();

  // Should update on switching between keyboard types
  console.log(keyboard.height.value);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} keyboardType="default" />
      <TextInput style={styles.input} keyboardType="number-pad" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20
  }
});
