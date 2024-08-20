import React, { SetStateAction, useState } from "react";
import GoalItem from "./components/GoalItem";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput, { inputdataprops } from "./components/GoalInput";
const width = Dimensions.get("window").width;
export default function App() {
  const [goalsArr, setgoalsArr] = useState<inputdataprops[]>([]);

  const passDataFChildTParent = (data: inputdataprops) => {
    setgoalsArr((prev) => [...prev, data]);
  };
  const setNewStatus = (data: inputdataprops) => {
    goalsArr.find((item) => {
      item.id === data.id;
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput passDataFChildTParent={passDataFChildTParent} />
      <View style={styles.secondContainer}>
        <View style={[styles.cols, styles.col1]}>
          <Text style={styles.Titles}>List of goals!...</Text>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "green" }}
          />
          <FlatList
            data={goalsArr}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  Goal={itemData.item.status === 1 ? itemData : undefined}
                  onNext={() => {
                    const newArray = goalsArr.map((item) => {
                      if (item.id === itemData.item.id) {
                        item.status += 1;
                        return item;
                      } else {
                        return item;
                      }
                    });
                    setgoalsArr(newArray);
                  }}
                  onDelete={() => {
                    const newArray = goalsArr.filter((item, index) => {
                      item.status === itemData.item.status;
                      goalsArr.splice(index, 1);
                      setgoalsArr(newArray);
                    });
                  }}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ width: 1, height: "100%", backgroundColor: "gray" }} />
        <View style={[styles.cols, styles.col2]}>
          <Text style={styles.Titles}>TODO</Text>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "green" }}
          />

          <FlatList
            data={goalsArr}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  Goal={itemData.item.status === 2 ? itemData : undefined}
                  onNext={() => {
                    const newArray = goalsArr.map((item) => {
                      if (item.id === itemData.item.id) {
                        item.status += 1;
                        return item;
                      } else {
                        return item;
                      }
                    });
                    setgoalsArr(newArray);
                  }}
                  onPrev={() => {
                    const newArray = goalsArr.map((item) => {
                      if (item.id === itemData.item.id) {
                        item.status -= 1;
                        return item;
                      } else {
                        return item;
                      }
                    });
                    setgoalsArr(newArray);
                  }}
                  onDelete={() => {
                    const newArray = goalsArr.filter((item, index) => {
                      item.status === itemData.item.status;
                      goalsArr.splice(index, 1);
                      setgoalsArr(newArray);
                    });
                  }}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ width: 1, height: "100%", backgroundColor: "gray" }} />
        <View style={[styles.cols, styles.col3]}>
          <Text style={styles.Titles}>Done</Text>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "green" }}
          />

          <FlatList
            data={goalsArr}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  Goal={itemData.item.status === 3 ? itemData : undefined}
                  onPrev={() => {
                    const newArray = goalsArr.map((item) => {
                      if (item.id === itemData.item.id) {
                        item.status -= 1;
                        return item;
                      } else {
                        return item;
                      }
                    });
                    setgoalsArr(newArray);
                  }}
                  onDelete={() => {
                    const newArray = goalsArr.filter((item, index) => {
                      item.status === itemData.item.status;
                      goalsArr.splice(index, 1);
                      setgoalsArr(newArray);
                    });
                  }}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    height: "100%",
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 8,
  },
  secondContainer: {
    width: "100%",
    height: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cols: {
    width: "32%",
  },
  col1: { backgroundColor: "transparent" },
  col2: { backgroundColor: "transparent" },
  col3: { backgroundColor: "transparent" },

  Titles: {
    marginBottom: 10,
    textAlign: "center",
  },
  textContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
