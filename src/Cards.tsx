import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'


const Data = [
    {
        id: '1',
        Description: 'Give me phrases to learn a new language',
        logo:'https://www.iconsdb.com/icons/preview/white/add-xxl.png'
    },
    {
        id: '2',
        Description: 'Suggest videos to quickly solve a problem',
        logo:'https://www.iconsdb.com/icons/preview/white/pencil-xxl.png'
    },
    {
        id: '3',
        Description: 'Plan a low-crab meal with what available in my fridge',
        logo:'https://www.iconsdb.com/icons/preview/white/add-xxl.png'
    },
    {
        id: '4',
        Description: 'Draft an email to a recruiter to accept a job offer',
        logo:'https://www.iconsdb.com/icons/preview/white/pencil-xxl.png'
    },
]

const Cards = () => {
   
  return (
 <View>
  
    <View className=' pt-14 pb-12 '>
          <Text className=' font-bold text-4xl text-[#f25a97]'>Hello Bro....</Text>
        <Text className=' font-serif font-bold w-64 text-4xl text-[#f5eeee57]'>How can I help you today?</Text>
    </View>
    <ScrollView  horizontal className='gap-3'>
        {Data.map((item,index) => {
             return (
              <View key={index} className=' bg-[#242526b3] w-48 p-4 h-48 rounded-2xl flex flex-col justify-between'>
                    <Text className=' font-serif text-sm text-[#E3E3E3]'> {item.Description}</Text>
                     <View className=' bg-[#131314]  w-[30px] h-[30px] ml-28  flex justify-center items-center   rounded-full '>
                          <Image className=' w-[15px] h-[15px] ' source={{uri : item.logo}} />
                     </View>
              </View>   
            );
         })
         }
       
    </ScrollView>
</View>
  )
}

export default Cards
