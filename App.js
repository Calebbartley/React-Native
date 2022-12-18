import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DefaultTheme, DarkTheme, useColorScheme, } from 'react-native';
import EmailConScreen from './screens/EmailConScreen';
import HomeScreen from './screens/HomeScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme ();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Sign-In' component={SignInScreen}/>
        <Stack.Screen name='Sign-Up' component={SignUpScreen}/>
        <Stack.Screen name='EmailCon' component={EmailConScreen}/>
        <Stack.Screen name='ResetPass' component={ResetPasswordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc',
  },
});
