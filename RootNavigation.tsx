import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import OtpScreen from './screens/OtpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState<string | undefined>(undefined); // State to track the initial route

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setInitialRoute('Main'); // Set route to Main if token exists
      } else {
        setInitialRoute('Auth'); // Set route to Auth if token does not exist
      }
      setIsLoading(false); // Loading is finished after checking the token
    };

    checkToken(); // Call the function to check for token

    // Optional: You can set a timeout for splash screen display if desired
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 3000); // 3 seconds for splash screen

    return () => clearTimeout(timer); // Cleanup the timer
  }, [isLoading]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="otpScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
