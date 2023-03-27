import {  StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Email from '../components/Email';
import DataInput from '../components/DataInput';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// 네이게이션 스택을 담는 공간

export default function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen // Stsck으로 쌓을 Screen
        name="Email"
        component={Email}
        options={{title: 'MainPage'}}
        styles={styles.container}
      />
      <Stack.Screen 
      name="DataInput" 
      component={DataInput}
      options={{title: 'DataInput Page'}}
       />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'95%'
  },
  navigator:{
    width:'95%'

  }
});
