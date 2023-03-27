import App from './src/App';
import { Dimensions,Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Index() {
return(
  <SafeAreaView style={styles.container}>
    <App />
  </SafeAreaView>

)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
});