// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import RootNavigation from './RootNavigation';


// export default function App() {
//   return (
//     <NavigationContainer>
//       <RootNavigation />
//     </NavigationContainer>
//   );
// }


import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {


  
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;