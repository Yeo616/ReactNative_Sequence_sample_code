import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions,Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Contents, Footer, Header } from '../components/Layout';
export default function App() {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.container}>

        <Header />
        <Contents />
        <Footer />

      {/* <TextInput
      style={{borderWidth:1,padding:10,fontSize:20}}
      placeholder="Enter a text..."
      value={text}
      onChange={onChangeText}
      />
      <Button title = "search" color = "#841584" />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
