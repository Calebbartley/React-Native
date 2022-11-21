import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/CustomInput'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <SignUpScreen/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})