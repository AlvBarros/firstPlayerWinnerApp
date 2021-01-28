import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, 
  Poppins_600SemiBold, 
  Poppins_300Light, 
  Poppins_400Regular,
  Poppins_200ExtraLight,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import AuthflowNavigator from './src/navigators/Authflow';
import { View, Text } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_200ExtraLight,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return (
    <View>
      <Text> Loading ... </Text>
    </View>
    );
  } else {
    return (
      <NavigationContainer>
        <AuthflowNavigator />
      </NavigationContainer>
    );
  }
}