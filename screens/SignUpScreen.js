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


const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  // Registered users redirect sign in
  const onSignInPressed = () => {
    console.warn("Sign in");
  };
// Sign up Button
  const onSignUpPressed = () => {
    console.warn("Sign Up");
  };
  // termsof use hot button
  const onTermsOfUsePressed = () => {
    console.warn("Terms Of Use");
  };
  // privacy policy hotlink
  const onPolicyPressed = () => {
    console.warn('Privacy Policy Pressed');
  };

  const { height } = useWindowDimensions();

  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          style={styles.custInput}
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          style={styles.custInput}
          placeholder="Johndoe@email.com"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          style={styles.custInput}
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          style={styles.custInput}
          placeholder="Confirm password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Sign Up" onPress={()=> navigation.navigate('Email Confirmation')} />
        
        <Text style={styles.text}>
            By registering, you confirm that you accept our {''}
            <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {''}
            <Text style={styles.link} onPress={onPolicyPressed}>Privacy Policy</Text>.
        </Text>
        <SocialSignInButtons/>

        <CustomButton
          text="Already have an account? Login now..."
          onPress={()=> navigation.navigate('Sign-In')}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
    borderColor: 'black',
    borderWidth: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    color: '#1b0282',
  },
  text: {
   color: '#BCBCBC',
   marginVertical: 15,
  },
  link: {
    color: '#4D15F6'
  },
});
