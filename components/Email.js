import { Button } from '@rneui/themed';
import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function Email(){
    const [text,setText] = useState('')
    const [underText,setUnderText] = useState('')
    const [state,setState] = useState('상태창')
    const [backColor,setBackColor] =useState('gray')
    const [error,setError] = useState('')
    const [linkDisplay,setLinkDisplay] = useState('none')

    function serachBtn(){
        setBackColor('green')
    }

    return(
        <View style={[styles.container,styles.contents]}>

        <Text style={styles.text}>로그인한 이메일 : </Text>
        <View style={{flexDirection:'row'}}>
            <TextInput style={{...styles.textInput,flex:2}} value = {text} onChange={(event)=>{setText(event.target.value);}}>
            </TextInput>
            <Button title="search" style={{flex:1}} onPress ={serachBtn}/>
        </View>


        <TouchableOpacity style={{...styles.circle, backgroundColor:backColor}}>
            <Text style={{color:'white', fontWeight:'bold'}}>Processing</Text>
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width:'100%',
        alignContent:'center',
        justifyContent: 'center',
        height:80,
    },
    header:{
        flex:1,
        backgroundColor:"#f1c40f",
    },
    contents:{
        flex:3,
        // backgroundColor:"#1abc9c",
        height:640,
    },
    textInput:{
        backgroundColor:'lightgreen',
        height:50,
        borderColor:'blue',
        margin:10
    },
    circle:{
        // flex:1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        fontWeight: 'bold',
        margin:'3%',
       
        shadowColor: "black",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 7,

    },
    footer:{
        flex:1,
        backgroundColor:"#3498db",
    },
    text:{
        fontSize:26
    }
})
