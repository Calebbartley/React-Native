import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import React, { useState } from "react";

const ResetPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  
  // Back to sign in
  const onSignInPressed = () => {
    console.warn("Back to Sign in ");
  };
  
  // password request code
  const onSendCodePressed = () => {
    console.warn("Send code Requested");
  };

  const { height } = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          style={styles.custInput}
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          style={styles.custInput}
          placeholder="johndoe@gmail.com"
          value={email}
          setValue={setEmail}
        />
        <CustomButton text="Send Code" onPress={onSendCodePressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="SECONDARY"
        />
      </View>
    </ScrollView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    height: "110%",
    maxHeight: 200,
  },
  custInput: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderColor: "black",
    borderWidth: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    color: "#1b0282",
  },
  text: {
    color: "#BCBCBC",
    marginVertical: 15,
  },
  link: {
    color: "#4D15F6",
  },
});
