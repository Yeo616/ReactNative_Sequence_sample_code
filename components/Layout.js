import { Button } from '@rneui/themed';
import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import DataInput from './DataInput';
import Email from './Email';

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
            <Email />
            <DataInput />
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
        
    },
    header:{
        // flex:1,
        backgroundColor:"#F5ECC8",
        width:'100%'
    },
    contents:{
        // flex:3,
        backgroundColor:"white",
        height:640,
    },
    
    footer:{
        // flex:1,
        backgroundColor:"#DBEEF3",
    },
    text:{
        fontSize:26
    }
})


