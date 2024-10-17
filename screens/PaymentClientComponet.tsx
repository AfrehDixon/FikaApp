import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const paymentClients = [
    { id: 1, name: 'Client 1', number: '1234', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Client 2', number: '5678', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Client 3', number: '9101', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Client 4', number: '1121', image: 'https://via.placeholder.com/150' },
];

const PaymentClientComponent = () => {
    return (
        <View style={styles.container}>
            {paymentClients.map(client => (
                <View key={client.id} style={styles.clientContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: client.image }} style={styles.image} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.clientName}>{client.name}</Text>
                        <Text style={styles.clientNumber}>{client.number}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    clientContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    clientName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    clientNumber: {
        fontSize: 16,
        color: 'gray',
    },
});

export default PaymentClientComponent;