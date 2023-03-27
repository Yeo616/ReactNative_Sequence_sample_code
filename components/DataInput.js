import React,{useState} from "react";
import { Dimensions,Button,StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function DataInput({navigation, route}){
    const [text,setText] = useState('')
    const [underText,setUnderText] = useState('')
    const [state,setState] = useState('Processing')
    const [backColor,setBackColor] =useState('gray')
    const [delDisplay,setDelDisplay] = useState(true)
    const [delBtnColor,setDelBtnColor] = useState('white')
    const [delBtnText,setDelBtnText] = useState('')

    console.log(route)
    const email = route.params.email
    console.log('email : ', email)

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
          // Fetch API를 사용하여 요청 보내기
          const response = await fetch(`http://10.0.2.2:8000/post-info-body`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, info: text }),
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
            setDelBtnText('데이터 삭제하기')
            setDelBtnColor('secondary')
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
    
        // Fetch API를 사용하여 요청 보내기
       const response = await fetch(`http://10.0.2.2:8000/delete-info?email=${email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"email":email}),
      });
    
      //응답이 정상적으로 완료되면
      if (response.ok) {
        const data = await response.json();
        setUnderText(JSON.stringify(data.status));
        console.log("response : ", data.status);
        
        // 버튼 색 바뀌기
        setBackColor("green");
        setState("delete successfully");
        setDelDisplay(true);
    
      } else{
        setBackColor("red");
        setState("connect error");
        setUnderText("error");
        console.error("catch error ");
      }
    }

    return(
        
        <View style={{...styles.container, margin:'5%'}}>
            <Text style={{...styles.text, fontSize:26, fontWeight:'bold'}}>데이터 입력 페이지 : </Text>
            <Text style={styles.text}>로그인 되어있는 이메일 : {email}</Text>
            <Text style={styles.text}>데이터 입력하여 DB에 등록 : </Text>
            <View >
                <TextInput 
                    placeholder="Enter Info"
                    style={styles.textInput} 
                    value = {text} 
                    onChangeText={(event)=>{setText(event);}}>
                </TextInput>
                <Button size='lg' title="add" style={{ margin:3}} onPress ={addBtn}/>
            </View>

        {/* 상태 텍스트 */}
        <Text>{underText}</Text>

        {/* 동그라미 */}
        <TouchableOpacity style={{...styles.circle, backgroundColor:backColor}}>
            <Text style={{color:'white', fontWeight:'bold'}}>{state}</Text>
        </TouchableOpacity>

        {/* 데이터 삭제하기 버튼 */}
        <Button 
            title={delBtnText}
            onPress={DelBtn}
            disabled={delDisplay}
            buttonStyle={{
                backgroundColor: 'blue',
                borderRadius: 5,
                margin: 5,
                maxWidth: 100,
            }}
            titleStyle={{
                color: 'white',
            }}
            
/>
        {/* 데이터 추가하기 버튼 */}
        <Button 
         title='메인페이지로 돌아가기'
         onPress={()=>{navigation.replace('Email')}}
         style = {{backgroundColor:'orange',}}
            ></Button>
        </View>
    )

}
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        width:windowWidth,
        alignContent:'center',
        justifyContent: 'center',
        margin:'5%'
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