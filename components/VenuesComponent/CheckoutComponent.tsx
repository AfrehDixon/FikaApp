import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Modal,
    Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Checkout = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { cartItems: initialCartItems = [], cartTotal: initialCartTotal = 0 } = route.params || {};

    const [cartItems, setCartItems] = useState(initialCartItems);
    const [cartTotal, setCartTotal] = useState(initialCartTotal);
    const [deliveryLocation, setDeliveryLocation] = useState('East Legon');
    const [isModalVisible, setModalVisible] = useState(false);

    const saveCartToStorage = async (items) => {
        try {
            await AsyncStorage.setItem('cartItems', JSON.stringify(items));
            // Navigation will refresh the previous screen
            navigation.setParams({ cartItems: items });
        } catch (error) {
            console.error("Error saving cart data:", error);
        }
    };

    useEffect(() => {
        // Recalculate total whenever cartItems change
        const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
        setCartTotal(total);
    }, [cartItems]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const removeCartItem = async (id) => {
        const updatedCart = cartItems.filter((item) => item._id !== id);
        setCartItems(updatedCart);
        const total = updatedCart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
        setCartTotal(total);
        await saveCartToStorage(updatedCart);
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.cartItemCard} key={item._id}>
            <View style={styles.cartItemHeader}>
                <Text style={styles.cartItemName}>{index + 1}. {item.name} ({item.size})</Text>
                <TouchableOpacity onPress={() => removeCartItem(item._id)}>
                    <Ionicons name="trash-bin-outline" size={20} color="#FF6347" />
                </TouchableOpacity>
            </View>
            <Text style={styles.cartItemDescription}>{item.description}</Text>
            <View style={styles.priceRow}>
                <Text style={styles.cartItemPrice}>GHC {(item.price * (item.quantity || 1)).toFixed(2)}</Text>
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
                            <Text style={{ color: '#33AC48', marginLeft: 5 }}>Cart items</Text>
                        </View>
                        {cartItems.length === 0 ? (
                            <Text style={styles.emptyCartText}>Your cart is empty.</Text>
                        ) : (
                            <FlatList
                                data={cartItems}
                                renderItem={renderItem}
                                keyExtractor={(item) => item._id}
                                scrollEnabled={false}
                            />
                        )}
                        <Text style={styles.totalPrice}>TOTAL: GHC {cartTotal.toFixed(2)}</Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionTitle}>
                            <MaterialIcons name="history" size={20} color='#69332E' />
                            <Text style={{ color: '#69332E', marginLeft: 5 }}>Delivery info</Text>
                        </View>
                        <Text style={styles.location}>Input Delivery Location</Text>
                        <TextInput
                            style={styles.input}
                            value={deliveryLocation}
                            onChangeText={setDeliveryLocation}
                        />
                        <TouchableOpacity style={styles.pickupOption}>
                            <Ionicons name="radio-button-off" size={20} color="gray" />
                            <Text style={styles.pickupText}>Pickup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.fixedButtonContainer}>
                <TouchableOpacity
                    style={[styles.payButton, cartItems.length === 0 && { opacity: 0.7 }]}
                    onPress={toggleModal}
                    disabled={cartItems.length === 0}
                >
                    <Text style={styles.payButtonText}>Pay GHC {cartTotal.toFixed(2)}</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}>
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={toggleModal}
                />
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Choose Payment Method</Text>
                        <TouchableOpacity style={styles.paymentOption}>
                            <Image source={require('../../assets/image/daddypay.png')} style={styles.paymentImage} />
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
    Overview: {
        paddingHorizontal: 10,
    },
    section: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#704321',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartItemCard: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    cartItemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    cartItemDescription: {
        fontSize: 12,
        color: '#666',
        marginVertical: 5,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
    },
    cartItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#421556',
    },
    totalPrice: {
        fontSize: 18,
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
        paddingBottom: 80,
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
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
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
    emptyCartText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default Checkout;
