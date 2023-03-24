import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export const Header = () =>{
    return(
        <View style={[styles.container,styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

export const Contents = () =>{
    return(
        <View style={[styles.container,styles.contents]}>
            <TextInput
            style={styles.textInput}
            ></TextInput>
        <TouchableOpacity style={styles.circle}>
            <Text style={{color:'white', fontWeight:'bold'}}>Processing</Text>
        </TouchableOpacity>
            <Text style={styles.text}>Contents</Text>
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
        flex:2,
        backgroundColor:"#1abc9c",
        height:640,
    },
    textInput:{
        backgroundColor:'white',
        borderColor:'blue',
        borderBottomColor:'blue'

    },
    circle:{
        // flex:1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'black',
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


