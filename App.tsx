import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './src/WelcomePage';

import Home from './src/Home';


const Stack = createNativeStackNavigator();

function App() {
  return (
 <NavigationContainer >

   <Stack.Navigator initialRouteName="Welcome"
   >
       <Stack.Screen  name="Welcome" component={WelcomePage}
        options={{ headerShown: false }} />
         <Stack.Screen   name="Home" component={Home}
        options={{ headerShown: false }} />

   </Stack.Navigator>
  </NavigationContainer>
   
  );
}


export default App;