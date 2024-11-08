import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './Tabnavigation';
import PaymentMethod from './screens/PaymentMethod';
import OrderHistory from './screens/OrderHistory';
import VenueDetailsComponent from './components/VenuesComponent/VenueDetailsComponent';
import CartDetailsComponent from './components/VenuesComponent/CartDetailsComponent';
import ViewCartComponent from './components/VenuesComponent/ViewCartComponent';
import CheckoutComponent from './components/VenuesComponent/CheckoutComponent';
import FeedbackScreen from './screens/FeebackScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#8B4513', height: 100 },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                headerStatusBarHeight: 40,
            }}>
            <Stack.Screen
                name="TabNavigation"
                component={TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PaymentMethod"
                component={PaymentMethod}
                options={{
                    title: 'PAYMENT METHODS',
                    headerStyle: { backgroundColor: '#5E3A16' },
                }}
            />
            <Stack.Screen
                name="Feedback"
                component={FeedbackScreen}
                options={{
                    title: 'FEEDBACK',
                    headerStyle: { backgroundColor: '#5E3A16' },
                }}
            />
            <Stack.Screen
                name="OrderHistory"
                component={OrderHistory}
                options={{
                    title: 'ORDER HISTORY',
                    headerStyle: { backgroundColor: '#5E3A16' },
                }}
            />
            <Stack.Screen
                name="VenueDetails"
                component={VenueDetailsComponent}
                options={{
                    headerTitle: () => (
                        <View>
                            <Text style={styles.headerTitle}>DADDY BOBA - EAST LEGON</Text>
                            <Text style={styles.headerSubtitle}>Jungle Avenue</Text>
                        </View>
                    ),
                    headerStyle: { backgroundColor: '#5E3A16' },
                }}
            />
            <Stack.Screen
                name="CartDetails"
                component={CartDetailsComponent}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="ViewCartComponent"
                component={ViewCartComponent}
                options={{
                    title: 'YOUR CART DETAILS',
                    headerStyle: { backgroundColor: '#5E3A16' },
                }}
            /> */}
            <Stack.Screen
                name="checkout"
                component={CheckoutComponent}
                options={{
                    title: 'CHECKOUT',
                    headerStyle: { backgroundColor: '#5E3A16' },
                }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#fff',
    },
});

export default MainNavigator;