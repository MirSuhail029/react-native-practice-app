import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.todoHeader}>
        <View style={styles.inputControl}>
          <TextInput
            style={styles.textInput}
            onChangeText={(val) => {
              setInputValue(val);
            }}
            value={inputValue}
          ></TextInput>
          <View style={{ justifyContent: "center" }}>
            <Button
              title="Add ToDo"
              onPress={() => {
                {
                  inputValue && setTodoArray([...todoArray, inputValue]);
                }
                setInputValue("");
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.todoBody}>
        <ScrollView>
          {todoArray.map((item, index) => {
            return (
              <View style={styles.todoListItemContainer} key={index}>
                <Text style={styles.todoListItem}>{item}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  todoHeader: {
    // backgroundColor: "gray",
    flex: 2,
    width: "90%",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
  },
  inputControl: {
    flexDirection: "row",
  },
  textInput: {
    // backgroundColor: "green",
    fontSize: 20,
    height: 50,
    width: "70%",
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  todoBody: {
    // backgroundColor: "lightgreen",
    flex: 7,
    width: "90%",
    marginVertical: 20,
  },
  todoListItemContainer: {
    backgroundColor: "rgb(0,150,255)",
    marginVertical: 15,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  todoListItem: {
    color: "white",
    fontSize: 20,
  },
});
