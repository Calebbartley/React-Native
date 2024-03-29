import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 50,
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    height:'100%'
  },
});
