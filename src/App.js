import { useWindowDimensions, Dimensions,Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Contents, Footer, Header } from '../components/Layout';
import Navigation from '../navigation/Navigation';


export default function App() {
    const windowWidth = Dimensions.get("window").width;
    
  return (
    <SafeAreaView >
    <View>
    <View style = {{width:windowWidth, marginHorizontal:'5%'}}>
    </View>
        <Navigation />
    </View>
    </SafeAreaView>
        // <View style={{flex:1, backgroundColor:'red'}}>
        //  {/* <Contents /> */}
        //  {/* <Footer /> */}
        // <Navigation />
        // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  navigator:{
    width:'95%'
  }
});
