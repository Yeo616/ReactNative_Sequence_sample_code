import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions,Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import DataInput from '../components/DataInput';
import { Contents, Footer, Header } from '../components/Layout';
import Test from '../components/Test';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>

        <Header />
        <Contents />
        <Footer />


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
