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


const EmailConScreen = () => {
  const [username, setUsername] = useState("");
  
  const [code, setCode] = useState("");

  // Confirmation code
  const onConfirmPressed = () => {
    console.warn("Success");
  };
  const onSignInPressed = () => {
    console.warn("Back to Sign in ");
  };
  const onResendPressed = () => {
    console.warn("Resend Code");
  };
  // terms of use hot button
  const onTermsOfUsePressed = () => {
    console.warn("Terms Of Use");
  };
  // privacy policy hotlink
  const onPolicyPressed = () => {
    console.warn("Privacy Policy Pressed");
  };

  const { height } = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <Text style={styles.title}>Confirm your Email</Text>
        <CustomInput
          style={styles.custInput}
          placeholder="johndoe@gmail.com"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          style={styles.custInput}
          placeholder="Confirmation Code"
          value={code}
          setValue={setCode}
        />
        <CustomButton
        text="Confirm"
        onPress={onConfirmPressed}
        />

        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="SECONDARY"
        />
      </View>
    </ScrollView>
  );
};

export default EmailConScreen;

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
