import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const WelcomePage = ({navigation}) => {
  return (
 <SafeAreaView className=''>
   <ScrollView>
   <View  className=' bg-[#1E1F20]   p-6 '>

      <View className='flex flex-row justify-between items-center  '>
         <View className='  flex-1 flex-row items-center   '>
                <Image
                   className=' h-4 w-4 mr-4 '
                   source={{uri: 'https://www.iconsdb.com/icons/preview/white/menu-4-xxl.png'}} />
                   <Text className=' text-[19px] text-[#CACCCE] '>Gemini</Text>
         </View>
         <TouchableOpacity  >
         <View className=' rounded-md h-12 w-24 bg-[#1a73e8c2] items-center justify-center'  >
            <Text className='font-serif text-lg font-medium text-[#fff]'>Sign in</Text>
         </View>
         </TouchableOpacity>
      </View>

      <View>
         <Image
            className=' relative rounded-2xl h-56 w-[100%] ml-5 mt-10 '
            source={{uri: 'https://www.gstatic.com/lamda/images/landing/a/i18n/en/m1_1d0d7536b1b03e27d1e69.jpg'}} />

          <View className='  h-32 w-[98%] ml-6  mt-40  bg-[#1E1F20] rounded-3xl absolute flex flex-row  justify-center'>
            <Image
               className=' rounded-2xl w-12 h-12  mt-7 '
               source={{uri: 'https://www.gstatic.com/lamda/images/landing/a/i18n/en/ma1_0bcf19dc2254db92204b3.png'}} />
               <Text className=' mt-7 text- w-60 text-white ml-4'>What's wrong with this? Create a step-by-step guide on how to take better care of it</Text>
          </View>

      </View>

      <View  className='mt-16 ml-6 w-full pb-10'>
            <Image className='w-[270] h-[100] '
               source={require('./icon/gemini_icon.png')}/>

              <Text className=' font-sans font-medium mt-7 text-2xl text-white'>Supercharger your creativity and productivity</Text>
              <Text  className=' font-sans font-medium mt-8 text-sm text-white'>Chat to start writing, planning, learning and more with Google AI</Text>
              <TouchableOpacity onPress={() =>
                 navigation.navigate('Home', {name: 'Jane'})} >
              <View className=' mt-9 rounded-3xl h-12 w-24 bg-[#1a73e8c1] items-center justify-center'  >
                <Text className=' font-serif text-lg font-medium text-[#fff]'>Sign in</Text>
              </View>
              </TouchableOpacity>

      </View>
     </View>
      
     <View className=' pl-10 bg-[#26282aee] pt-6' >
               <Text className=' mb-7  font-serif font-semibold text-2xl text-[#fff] '>Google</Text>
               <Text className=' pb-6 font-serif font-medium text-xs text-[#fff] '>Privacy & Terms</Text>
            </View>
   </ScrollView>
</SafeAreaView>
  )
}

export default WelcomePage
