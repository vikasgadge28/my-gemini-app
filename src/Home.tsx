import React, { useState, useEffect, useRef } from 'react';
import { Image, Text, View, Platform, Keyboard, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from './Input';
import Cards from './Cards';
import { data } from './data';

const HomeScreen = () => {
  const [messages, setMessages] = useState([])

    
    const  newChat =()=>{
      setMessages([])
    }
  return (
    <SafeAreaView className=' bg-[#131314] h-full p-6 flex-1 pb-20 '>

        <View className=' items-center flex flex-row justify-between'>

              <Text className=' text-[19px] text-[#CACCCE] '>Gemini</Text>
          <View className=' flex flex-row items-center '>
          { messages.length>0 &&(
              <TouchableOpacity onPress={newChat}>
              <View className=' mr-10 bg-[#363838ab] w-[90px] h-[42px] rounded-full flex flex-row items-center justify-center'>
                   <Image className='  w-[20px] h-[20px] rounded-full'
                    source={require('./icon/plus_Icon_.png')}
                    />
                    <Text className=' ml-2 text-[16px] text-[#CACCCE] ' >New </Text>
              </View>
           </TouchableOpacity>
          )
           
          }  
                <Image className=' w-[45px] h-[45px] rounded-full'
                 source={require('./icon/UserImg.jpg')}
                 />
          </View>
        </View>

    
    {
      messages.length >0 ?(
      <ScrollView
      className='p-3 mt-10 '
      bounces={false}
      horizontal = {false}
      showsVerticalScrollIndicator={false}
      >
        {
          messages.map((messages, index)=>{
           if(messages.role =="assistant"){
                  return(
                         <View key={index} className=' pb-8'>
                            <Text className='text-white text-lg '>
                                 {messages.content}
                            </Text>
                          </View>
                         )      
               }
           else{
            return(
              <View key={index} className=' pb-2'>
                   <View className=' mb-4'>
               
                    <View>
                    <Image className=' w-[40px] h-[40px] rounded-full mb-2'
                         source={require('./icon/UserImg.jpg')} />
                    </View>
               
                        <Text className=' text-white text-lg'>{messages.content}</Text>
                 </View>

              <View className='flex flex-row justify-between items-center mb-3'>
                 <View className='   '>
                          <Image className=' w-[40px] h-[35px] ' source={require("./icon/gemini_sparkle.png")} />
                 </View>
                 <View className='   '>
                          <Image className=' w-[23px] h-[20px] ' source={require("./icon/Sound_icon.png")} />
                 </View>
              </View>
             </View>

               )}     
          }
        )
          }
        
    </ScrollView>
      ):
      (
            <View>
                <Cards/>
            </View>
      )
    }

            <View className=' absolute'>
                <Input messages={messages} setMessages={setMessages} />
            </View>
            
    </SafeAreaView>
  );
};

export default HomeScreen;
