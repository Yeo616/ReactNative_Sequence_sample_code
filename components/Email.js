import { Button } from '@rneui/themed';
import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function Email({navigation}){

    const [text,setText] = useState('')
    const [underText,setUnderText] = useState('')
    const [state,setState] = useState('Processing')
    const [backColor,setBackColor] =useState('gray')
    const [linkDisplay,setLinkDisplay] = useState(true)
    const [dataBtn,setDataBtn] = useState('')

    async function serachBtn(event){
        event.preventDefault();
        console.log('email: ',text)

        if (text === ''){
            setBackColor('red')
            setState('Empty error')
            setUnderText('email is required')
            return
        }

        try{
            console.log('email :',text)
            const response = await fetch(`http://10.0.2.2:8000/get-email?email=${text}`);
            console.log("response",response);
                //응답이 정상적으로 완료되면
            if (response.ok) {
                const data = await response.json();
                console.log("data : ", data);
                
                // 찾는 데이터가 없을 경우에
                if (data.status === "non-exist") {
                 // 데이터가 없으면, 입력페이지로 전환 시키기
                    setLinkDisplay(false)
                    setDataBtn('데이터 추가하기')
                    setBackColor('orange')
                    setState('No data')
                    setUnderText( "Email has verified, but "+JSON.stringify(data.status))
                    // localStorage.setItem("email", text);
                    
                    console.log("email exists : ", response.status);
                }else{
                    setBackColor('green')
                    setState('done')
                    setLinkDisplay(false)
                    setDataBtn('데이터 수정하기')

                    setUnderText(JSON.stringify(data.status))
                }}else{
                    setBackColor('red')
                    setState('Wrong email')
                    setUnderText('error'+ e)
                    console.error("email error : ", e);
                }
        }catch(e){
            // 응답이 정상이 아닐 경우, 버튼 색이 바뀜
            setBackColor('red')
            setState('Server Error')
            setUnderText('error'+ e)
            console.error("catch error : ", e);
        }
    }


    return(
        <>
            {/* <Text style={styles.text}>로그인한 이메일 : </Text> */}
            {/* <View style={{flexDirection:'row', alignItems:'center'}}> */}
            <View style={{margin:'5%'}}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder = "Enter Email"
                    value = {text} 
                    onChangeText={(event)=>{setText(event);}}>
                </TextInput>
                <Button size='lg' title="search" style={{flex:1}} onPress ={serachBtn}/>
            </View>
            <Text>{underText}</Text>

            {/* 동그라미 */}
            <TouchableOpacity style={{...styles.circle, backgroundColor:backColor}}>
                <Text style={{color:'white', fontWeight:'bold'}}>{state}</Text>
            </TouchableOpacity>

            {/* 데이터 추가하기 버튼 */}
            <Button 
                    variant='contained'
                    color='secondary'
                    title={dataBtn}
                    onPress={() => navigation.navigate('DataInput', {email: text})}
                    disabled ={linkDisplay}
                    buttonStyle={{
                        backgroundColor: 'blue',
                        borderRadius: 5,
                        margin: 5,
                        maxWidth: 200,
                    }}
                    titleStyle={{
                        color: 'white',
                    }}
                    ></Button>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        width:'95%',
        alignContent:'center',
        justifyContent: 'center',
        height:80,
    },
    textInput:{
        height:50,
        borderWidth:1,
        borderColor:'blue',
        borderRadius:20,
        margin:10
    },
    circle:{
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
