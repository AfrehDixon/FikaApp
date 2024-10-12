import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VenueDetailsComponent from './components/VenuesComponent/VenueDetailsComponent';


const Stack = createStackNavigator();


const StackNavigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#8B4513',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="VenueDetails" 
            component={VenueDetailsComponent} 
            options={{
              title: 'THE TEAHOUSE - EAST LEGON',
              headerRight: () => (
                <Text style={styles.headerSubtitle}>12 Tripoli Street, Accra</Text>
              ),
            }}
          />
          {/* <Stack.Screen name="CoffeeSeries" component={CoffeeSeriesScreen} />
          <Stack.Screen name="Signature" component={SignatureScreen} />
          <Stack.Screen name="Cart" component={CartScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8B4513',
    },
    headerSubtitle: {
      fontSize: 12,
      color: 'white',
      marginRight: 10,
    },
    section: {
      marginVertical: 10,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
    viewAll: {
      color: '#4CAF50',
    },
    cart: {
      backgroundColor: '#6B3E26',
      padding: 15,
      alignItems: 'center',
    },
    cartText: {
      color: 'white',
      fontWeight: 'bold',
    },
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8B4513',
    },
    screenTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
    },
  });
  
export default StackNavigation;