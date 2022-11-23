import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import Header from '../components/CustomInput'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import EmailConScreen from './EmailConScreen'
import ResetPasswordScreen from './ResetPasswordScreen'
import Navi from '../components/navigation/Navi';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="HomeScreen" component = {HomeScreen}/>
        <stack.Screen name="Sign In" component = {SignInScreen}/>
        <stack.Screen name="Sign Up" component = {SignUpScreen}/>
        <stack.Screen name="Email Verification" component = {EmailConScreen}/>
        <stack.Screen name="Reset Password" component = {ResetPasswordScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})