import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import OtpScreen from './screens/OtpScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate any initialization process here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds for splash screen

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="otpScreen" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;