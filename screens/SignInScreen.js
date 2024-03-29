import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Logo from "../assets/Logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import React, { useState } from "react";
import SocialSignInButtons from "../components/SocialSignInButtons";
import SignUpScreen from "./SignUpScreen";
import { NavigationAction } from "@react-navigation/native";



const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password?");
  };

  const onSignUpPressed = () => {
    console.warn("Sign Up");
  };

  const { height } = useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          style={styles.custInput}
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          style={styles.custInput}
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign in" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot Password?"
          onPress={()=> navigation.navigate('Reset Password')}
          type="TERTIARY"
        />
        <SocialSignInButtons/>

        <CustomButton
          text="Don't have an account? Create one now..."
          onPress={()=> navigation.navigate('Sign-Up')}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

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
  },
});
