import React,{useState} from "react";
import { Button,StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function DataInput(){
    const [text,setText] = useState('')
    const [underText,setUnderText] = useState('')
    const [state,setState] = useState('Processing')
    const [backColor,setBackColor] =useState('gray')
    const [delDisplay,setDelDisplay] = useState(true)

    const email = '123@example.com'

    async function addBtn(event){
        // 데이터 추가 
        event.preventDefault();

        if (text === ''){
            setBackColor('red')
            setState('Empty error')
            setUnderText('Info is required')
            return
        }
    
        try {
          // FormData 객체 생성
          const formData = new FormData();
          formData.append("info", text);
          formData.append("email", email);
      
          // Fetch API를 사용하여 요청 보내기
          const response = await fetch(`http://10.0.2.2:8000/post-info`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData),
          });
          const data = await response.json();
      
          //응답이 정상적으로 완료되면
          if (response.ok) {
            setUnderText("new_info : "+ text);
            console.log("response : ", data.status);
      
            // 버튼 색 바뀌기
            setBackColor("green");
            setState("success");
            setDelDisplay(false)
          }
        } catch (error) {
          // 응답이 정상이 아닐 경우,
          // 버튼 색 바뀌기
          setBackColor("red");
          setUnderText("wrong input");
          setUnderText(error);
          console.error("catch error : ", error);
        }
    }

    async function DelBtn(){
        // 삭제버튼
        setState('deleted')
        setBackColor('orange')
    }

    return(
        
        <View style={styles.container}>
            <Text style={{...styles.text, fontSize:26, fontWeight:'bold'}}>데이터 입력 페이지 : </Text>
            <Text style={styles.text}>로그인 되어있는 이메일 : {email}</Text>
            <Text style={styles.text}>데이터 입력하여 DB에 등록 : </Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TextInput 
                    placeholder="Enter Info"
                    style={{...styles.textInput,flex:2}} 
                    value = {text} 
                    onChangeText={(event)=>{setText(event);}}>
                </TextInput>
                <Button size='lg' title="add" style={{flex:1, margin:3}} onPress ={addBtn}/>
            </View>

        {/* 상태 텍스트 */}
        <Text>{underText}</Text>

        {/* 동그라미 */}
        <TouchableOpacity style={{...styles.circle, backgroundColor:backColor}}>
            <Text style={{color:'white', fontWeight:'bold'}}>{state}</Text>
        </TouchableOpacity>

        {/* 데이터 삭제하기 버튼 */}
        <Button 
                variant='contained'
                color='secondary'
                title='데이터 삭제하기'
                disabled ={delDisplay}
                disabledStyle ={{backgroundColor:'white'}}
                disabledTitleStyle = {{color:'white'}}
                buttonStyle={{
                    borderColor: 'transparent',
                    borderRadius: 5,
                    margin: 5,
                    maxWidth:200
                  }}
                  onPress={DelBtn}
                ></Button>
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
    text:{
        marginTop:5,
        marginBottom:5,
    },
    textInput:{
        height:50,
        borderWidth:1,
        borderColor:'blue',
        borderRadius:20,
        margin:5
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
})