import React, { useEffect, useState } from 'react'
import { Image, Keyboard, Platform, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios';


const Input = ({messages, setMessages}) => {
     const [keyboardStatus, setKeyboardStatus] = useState(false);
     const [question,setQuestion] = useState("What is React Native");
     const [answer,setAnswer] = useState("");
      
    
     const generateAnswers = async () => {
      try { const response = await axios({
           url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCNNeMep2KxK2Yz_dZ8WoJYdNPjbzG1RGE',
           method: "post",
           data: {
               contents:
                   [{parts:[{text:question}]}
               ]}
           })
           const newAnswer = response.data.candidates[0].content.parts[0].text;

           // Update the answer state
           setAnswer(newAnswer);
       
           // Update the messages state with the new messages
           setMessages((prevMessages: any) => [
             ...prevMessages,
             { role: 'user', content: question },
             { role: 'assistant', content: newAnswer }
           ]);
       
           // Clear the question input field
           setQuestion('');
         }
      catch (error) {
      console.error('Error generating answers:', error);
    } 
  }    
     useEffect(() => {
       const keyboardDidShowListener = Keyboard.addListener(
         Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
         () => {
           setKeyboardStatus(true);
         }
       );
       const keyboardDidHideListener = Keyboard.addListener(
         Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
         () => {
           setKeyboardStatus(false);
         }
       );
   
       return () => {
         keyboardDidShowListener.remove();
         keyboardDidHideListener.remove();
       };
     }, []);

  return (
     <View style={{ marginTop: keyboardStatus ? 390: 680, flex: 1 }}>
 
    <View className='shadow-2xl shadow-black h-16 bg-[#242526] ml-4 pl-4  rounded-full flex flex-row items-center justify-between'>
            <View>
                 <TextInput  
                  value={question} 
                  onChangeText={(Text)=> setQuestion(Text)}
                  className=' w-72 text-white text-base pl-5' 
                  placeholder="Enter a prompt here"
                  placeholderTextColor="#fff"
                   />
            </View>
            <TouchableOpacity  >
                     <View className='  flex justify-center items-center mr-4 '>
                          <Image className=' w-[15px] h-[25px] ' source={require("./icon/MicIcon.png")} />
                     </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={generateAnswers} >
                     <View className='  flex justify-center items-center  '>
                          <Image className=' w-[22px] h-[25px] mr-5 ' source={require("./icon/sendIcon.png")} />
                     </View>
           </TouchableOpacity>
     </View>
      
 </View>  
  )
}

export default Input
