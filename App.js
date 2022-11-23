import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DefaultTheme, DarkTheme, useColorScheme, } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const scheme = useColorScheme ();
  return (
    <View theme={scheme === 'dark' ? DarkTheme : DefaultTheme} style={styles.container}>
      <HomeScreen/>
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
