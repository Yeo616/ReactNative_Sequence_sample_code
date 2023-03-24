import { Button } from '@rneui/themed';
import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import Email from './Email';

export const Header = () =>{
    return(
        <View style={[styles.container,styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

export const Contents = () =>{
    const [text,setText] = useState('')
    const [underText,setUnderText] = useState('')
    const [state,setState] = useState('상태창')
    const [backColor,setBackColor] =useState('gray')
    const [error,setError] = useState('')
    const [linkDisplay,setLinkDisplay] = useState('none')

    function serachBtn(){

    }
    return(
        <View style={[styles.container,styles.contents]}>
            <Email />
        </View>
    )
}

export const Footer = () =>{
    return(
        <View style={[styles.container,styles.footer]}>
            <Text style={styles.text}>Footer</Text>
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
    
    footer:{
        flex:1,
        backgroundColor:"#3498db",
    },
    text:{
        fontSize:26
    }
})


