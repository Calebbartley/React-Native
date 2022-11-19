import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/CustomInput'
import SignInScreen from './SignInScreen'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <SignInScreen/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})