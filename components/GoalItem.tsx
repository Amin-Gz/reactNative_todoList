import {
  Text,
  View,
  StyleSheet,
  ListRenderItemInfo,
  Pressable,
} from "react-native";

interface funcProps {
  Goal?: ListRenderItemInfo<any>;
  onNext?: () => void;
  onPrev?: () => void;
  onDelete: () => void;
}

function GoalItem({ Goal, onDelete, onNext, onPrev }: funcProps) {
  if (Goal?.item !== undefined) {
    return (
      <View style={styles.goalTextContainer}>
        <Text style={styles.goalText}>{Goal?.item.text}</Text>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={onPrev}>
            <Text style={[styles.btnText, styles.btnText3]}>Prev</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={onDelete}>
            <Text style={[styles.btnText, styles.btnText2]}>Delete</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={onNext}>
            <Text style={[styles.btnText, styles.btnText1]}>Next</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
export default GoalItem;

const styles = StyleSheet.create({
  goalTextContainer: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 3,
    width: "100%",
    backgroundColor: "#1D976C",
    borderRadius: 5,
  },
  goalText: {
    color: "white",
    marginStart: 10,
    marginBottom: 4,
  },
  btnContainer: {
    // flexDirection: "row",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    marginVertical: 3,
    borderRadius: 2,
  },
  btnText: {
    textAlign: "center",
  },
  btnText1: {
    color: "yellowgreen",
  },
  btnText2: {
    color: "red",
  },
  btnText3: {
    color: "purple",
  },
});
