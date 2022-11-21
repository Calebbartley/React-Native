import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

const SocialSignInButtons = () => {
      // Sign in with third party
  const onSignInFacebook = () => {
    console.warn("Sign in with Facebook");
  };
  const onSignInGoogle = () => {
    console.warn("Sign in with Google");
  };
  const onSignInApple = () => {
    console.warn("Sign in with Apple");
  };

  return (
    <>
      <CustomButton
        text="Sign in with Facebook"
        onPress={onSignInFacebook}
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />

      <CustomButton
        text="Sign in with Google"
        onPress={onSignInGoogle}
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />

      <CustomButton
        text="Sign in with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;

const styles = StyleSheet.create({});
