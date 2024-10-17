import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';

export default function PaymentMethod() {
    const paymentClients = [
        { id: 1, name: 'MTN', number: '0555429655', image: require('../assets/image/mtn.jpeg') },
        { id: 2, name: 'MTN', number: '0555429655', image: require('../assets/image/tigo.png') },
        { id: 3, name: 'Tigo', number: '0555429655', image: require('../assets/image/mastercard.jpeg')},
        // { id: 4, name: 'Aitel', number: '05554296551', image: require('../assets/image/MTN-logo- 1.png') },
    ];

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />  
            {paymentClients.map(client => (
                <TouchableOpacity key={client.id} style={styles.clientContainer}>
                    {/* <View style={styles.imageContainer}> */}
                        <Image source={client.image} style={styles.image} />
                    {/* </View> */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.clientName}>{client.name}</Text>
                        <Text style={styles.clientNumber}>{client.number}</Text>
                    </View>
              </TouchableOpacity>
            ))}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> + Add new</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F0F0F0',
        

  },
    button: {
        // backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        // width: '40%'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,  // Space below the header
        textAlign: 'center',  // Center the header text
    },
    clientContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    imageContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    image: {
        width: 61,
        height: 47,
        borderRadius: 10, // Makes the image circular
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    clientName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF', // Blue color for the client name
    },
    clientNumber: {
        fontSize: 16,
        color: 'gray',
        marginTop: 7, // Slightly reduce margin between name and number
    },
});
