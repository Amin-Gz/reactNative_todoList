import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Pressable,
  Text,
  Keyboard,
} from "react-native";

export interface inputdataprops {
  text: string;
  id: string;
  status: 1 | 2 | 3; //1=Goals 2=todo 3=done
}
interface GoalInputFuncProps {
  passDataFChildTParent: (data: inputdataprops) => void;
}

function GoalInput({ passDataFChildTParent }: GoalInputFuncProps) {
  const [inputData, setInputData] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string>("");

  const inputKeeper = (enteredText: string) => {
    setInputData(enteredText);
    setError("");
  };
  const handlePress = () => {
    inputData
      ? (passDataFChildTParent({
          text: inputData,
          id: inputData + Math.random().toString(),
          status: 1,
        }),
        setInputData(""),
        Keyboard.dismiss())
      : setError("Enter Value");
  };

  return (
    <View style={styles.firstContainer}>
      <View style={styles.formContainer}>
        <TextInput
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder="Your course goal!"
          style={[
            styles.textInput,
            { borderColor: isFocused ? "#00416A" : "gray" },
          ]}
          value={inputData}
          onChange={(event) => inputKeeper(event.nativeEvent.text)}
        />
        <Pressable style={styles.buttonContainer} onPress={handlePress}>
          <Text style={styles.buttonText}>Add goal</Text>
        </Pressable>
      </View>
      {error && <Text style={styles.inputError}>{error}</Text>}
    </View>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    height: 40,
  },
  firstContainer: {
    marginBottom: 24,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 16,
    height: 90,
  },
  textInput: {
    borderWidth: 1,
    width: "60%",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#00416A",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 700,
    color: "#076585",
  },
  inputError: {
    paddingLeft: 22,
    paddingTop: 16,
    color: "red",
    fontSize: 14,
  },
});
