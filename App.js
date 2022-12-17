import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DefaultTheme, DarkTheme, useColorScheme, } from 'react-native';
import EmailConScreen from './screens/EmailConScreen';
import HomeScreen from './screens/HomeScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
  const scheme = useColorScheme ();
  return (
    <View theme={scheme === 'dark' ? DarkTheme : DefaultTheme} style={styles.container}>
      <SignUpScreen/>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc',
  },
});
