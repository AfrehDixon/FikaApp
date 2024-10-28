import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, StatusBar, ActivityIndicator } from 'react-native';

const OrderHistory = () => {
    const [loading, setLoading] = useState(false);
    const [orderHistory, setOrderHistory] = useState([]);

    const fetchOrderHistory = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://fiakapi-1.onrender.com/api/orders/user/60d0fe4f5311236168a109ca', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            // console.log('Order history fetched successfully:', responseData);

            if (responseData.status === "success" && responseData.data) {
                const orders = responseData.data.map(order => ({
                    id: order._id,
                    icon: require('../assets/image/orderIcon.png'),
                    name: order.product?.name || 'Unknown Item',
                    description: order.product?.description || 'No description available',
                    price: order.product?.price ? `GH₵ ${order.product.price}` : 'Price not available',
                    paymentType: order.paymentType,
                    deliveryTo: order.deliveryAddress,
                    status: order.status,
                }));
                setOrderHistory(orders);
            } else {
                console.error("Error fetching orders:", responseData.message || "Unknown error");
                setOrderHistory([]);
            }
        } catch (error) {
            console.error("Error:", error);
            setOrderHistory([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrderHistory();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <StatusBar hidden={true} />
            <View style={styles.iconContainer}>
                <Image source={item.icon} style={styles.icon} />
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
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
            ) : (
                <FlatList
                    data={orderHistory}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                    ListEmptyComponent={<Text style={styles.emptyText}>History is empty</Text>}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0f0f0',
        padding: 10,
    },
    loader: {
        marginTop: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        flexDirection: 'row',
        padding: 15,
        marginVertical: 7,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        margin: 10,
    },
    iconContainer: {
        marginRight: 15,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#6B3E26',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
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
        marginVertical: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
        flex: 1,
        marginRight: 10,
    },
    orderstatus: {
        gap: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#421556',
    },
    paymentType: {
        fontSize: 12,
        color: '#666',
    },
    paymentTypeValue: {
        color: '#DEC74C',
    },
    deliveryTo: {
        fontSize: 12,
        color: '#666',
    },
    deliveryToValue: {
        color: '#007BFF',
    },
    status: {
        fontSize: 12,
        color: '#666',
    },
    statusValue: {
        color: '#00AF8A',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginTop: 20,
    },
});

export default OrderHistory;
