import React from 'react';
import { View, Text, StyleSheet, FlatList, Image,StatusBar } from 'react-native';

const orders = [
    {
        id: '1',
        icon: 'https://via.placeholder.com/50',
        name: 'Vanilla Cone',
        description: 'Classic vanilla ice cream in a crispy cone.',
        price: '20 GHS',
        paymentType: 'Credit Card',
        deliveryTo: 'Accra',
        status: 'Delivered',
    },
    {
        id: '2',
        icon: 'https://via.placeholder.com/50',
        name: 'Chocolate Scoop',
        description: 'Rich chocolate ice cream with a smooth texture.',
        price: '15 GHS',
        paymentType: 'Mobile Money',
        deliveryTo: 'Kumasi',
        status: 'Pending',
    },
    {
        id: '3',
        icon: 'https://via.placeholder.com/50',
        name: 'Strawberry Delight',
        description: 'Fresh strawberry ice cream bursting with flavor.',
        price: '30 GHS',
        paymentType: 'Cash on Delivery',
        deliveryTo: 'Takoradi',
        status: 'Shipped',
    },
    // {
    //     id: '4',
    //     icon: 'https://via.placeholder.com/50',
    //     name: 'Mint Chocolate Chip',
    //     description: 'Cool mint ice cream with rich chocolate chips.',
    //     price: '25 GHS',
    //     paymentType: 'Credit Card',
    //     deliveryTo: 'Tamale',
    //     status: 'Delivered',
    // },
];

const OrderHistory = () => {
    const renderItem = ({ item }) => (
        <View style ={{backgroundColor: '#F0F0F0' , gap: 7}}>
        <View style={styles.card}>
            
            <StatusBar hidden={true} /> 
            <View style={styles.iconContainer}>
                <Image source={{ uri: item.icon }} style={styles.icon} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.descriptionPriceContainer}>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
                <View style={styles.orderstatus}>
                    <Text style={styles.paymentType}>Payment Type: <Text style={styles.paymentTypeValue}>{item.paymentType}</Text></Text>
                    <Text style={styles.deliveryTo}>Delivery to: <Text style={styles.deliveryToValue}>{item.deliveryTo}</Text></Text>
                    <Text style={styles.status}>Status: <Text style={styles.statusValue}>{item.status}</Text></Text>
                </View>
                
                </View>
                </View>
        </View>
    );

    return (
        <View>
        <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer} // Adds padding to the FlatList
        />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10, // Add padding around the entire FlatList
    },
    card: {
        flexDirection: 'row',
        padding: 15, // Increased padding for more space
        marginVertical: 7, // Increased vertical margin for spacing between cards
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        overflow: 'hidden', // Helps with rounded corners
    },
    iconContainer: {
        marginRight: 15, // Increased space between icon and details
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    detailsContainer: {
        flex: 1,
        padding: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    descriptionPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8, // Added margin for spacing around the description
    },
    description: {
        fontSize: 14,
        color: '#666',
        flex: 1,
        marginRight: 10, // Space between description and price
    },
    orderstatus: {
        // marginTop: 5,
        gap: 5// Space between description and order status
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#421556', // Color for price
    },
    paymentType: {
        fontSize: 12,
        color: '#666',
    },
    paymentTypeValue: {
        color: '#DEC74C', // Color for payment type
    },
    deliveryTo: {
        fontSize: 12,
        color: '#666',
    },
    deliveryToValue: {
        color: '#007BFF', // Optional color for delivery to
    },
    status: {
        fontSize: 12,
        color: '#666',
    },
    statusValue: {
        color: '#00AF8A', // Color for status
    },
});

export default OrderHistory;
