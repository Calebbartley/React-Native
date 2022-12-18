import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import Header from '../components/CustomInput'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import EmailConScreen from './EmailConScreen'
import ResetPasswordScreen from './ResetPasswordScreen'
import Navi from '../components/navigation/Navi';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeScreen = () => {
  const stack = createNativeStackNavigator();
  return (
  <View></View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})