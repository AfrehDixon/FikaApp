import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Modal, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Checkout = () => {
    const route = useRoute();
    const { cartItems = [], cartTotal = 0 } = route.params || {};
    const [deliveryLocation, setDeliveryLocation] = useState('East Legon');
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{index + 1}. {item.name} ({item.size})</Text>
            <View style={styles.priceRow}>
                <Text style={styles.cartItemDescription}>{item.description}</Text>
                <Text style={styles.cartItemPrice}>GHC {item.price.toFixed(2)}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.Overview}>
                    <View style={styles.section}>
                        <View style={styles.sectionTitle}>
                            <MaterialIcons name="redeem" size={18} color="#33AC48" />
                            <Text style={{ color: '#33AC48' }}>Cart items</Text>
                        </View>
                        <FlatList
                            data={cartItems}
                            renderItem={renderItem}
                            keyExtractor={(item) => item._id}
                        />
                        <Text style={styles.totalPrice}>TOTAL: GHC {cartTotal.toFixed(2)}</Text>
                    </View>

                    {/* Delivery Info Section */}
                    <View style={styles.section}>
                        <View style={styles.sectionTitle}>
                            <MaterialIcons name="history" size={20} color='#69332E' />
                            <Text style={{ color: '#69332E' }}>Delivery info</Text>
                        </View>
                        <Text style={styles.location}>Input Delivery Location</Text>
                        <TextInput
                            style={styles.input}
                            value={deliveryLocation}
                            onChangeText={(text) => setDeliveryLocation(text)}
                        />
                        <TouchableOpacity style={styles.pickupOption}>
                            <Ionicons name="radio-button-off" size={20} color="gray" />
                            <Text style={styles.pickupText}>Pickup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.fixedButtonContainer}>
                <TouchableOpacity style={styles.payButton} onPress={toggleModal}>
                    <Text style={styles.payButtonText}>Pay GHC {cartTotal.toFixed(2)}</Text>
                </TouchableOpacity>
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Choose Payment Method</Text>
                        {/* Payment Methods */}
                        <TouchableOpacity style={styles.paymentOption}>
                            <Image source={require('../../assets/image/fika5.png')} style={styles.paymentImage} />
                            <Text style={styles.paymentText}>Loyalty Points</Text>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity style={styles.paymentOption}>
                            <Image source={require('../../assets/image/mtn.jpeg')} style={styles.paymentImage} />
                            <Text style={styles.paymentText}>MTN Mobile Money</Text>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity style={styles.paymentOption}>
                            <Image source={require('../../assets/image/tigo.png')} style={styles.paymentImage} />
                            <Text style={styles.paymentText}>AirtelTigo Money</Text>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity style={styles.paymentOption}>
                            <Image source={require('../../assets/image/mastercard.jpeg')} style={styles.paymentImage} />
                            <Text style={styles.paymentText}>Mastercard</Text>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        {/* Other Payment Options */}
                        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#704321', // Dark brown
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    Overview: {
        paddingHorizontal: 10,
    },
    section: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#704321', // Brownish color for titles
        marginBottom: 10,
        flexDirection: 'row',
        gap: 5,
    },
    cartItem: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    cartItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    cartItemDescription: {
        flex: 1,
        fontSize: 12,
        color: '#666',
        marginTop: 5,
        marginLeft: 15,
    },
    cartItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#421556',
        textAlign: 'right',
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#33AC48',
        textAlign: 'right',
        marginTop: 10,
    },
    location: {
        fontSize: 16,
        color: '#1E1E1E',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#eaeaea',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        fontSize: 16,
        color: '#000',
    },
    pickupOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    pickupText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    scrollView: {
        flex: 1,
        paddingBottom: 80, // Add padding to account for the fixed button
    },
    fixedButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    payButton: {
        backgroundColor: '#704321',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    payButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paymentImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginHorizontal: 10,
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    paymentText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E1E1E',
    },
    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#D3D3D3',
        marginVertical: 5,
    },
    closeButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#6B4226',
        alignItems: 'center',
        borderRadius: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Checkout;
