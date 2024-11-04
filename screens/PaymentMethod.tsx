import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, Modal, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function PaymentMethod() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedNetwork, setSelectedNetwork] = useState(null);
    const [open, setOpen] = useState(false);
    const [otpVisible, setOtpVisible] = useState(false);
    const [otpCode, setOtpCode] = useState('');

    const paymentClients = [
        { id: 1, name: 'MTN MoMo', number: '0555429655', image: require('../assets/image/mtn.jpeg') },
        { id: 2, name: 'AirtelTigo', number: '0555429655', image: require('../assets/image/tigo.png') },
        { id: 3, name: 'Master Card', number: '03546455429655', image: require('../assets/image/mastercard.jpeg') },
    ];

    const networkProviders = [
        { label: 'MTN MoMo', value: 'MTN' },
        { label: 'AirtelTigo', value: 'AirtelTigo' },
        { label: 'Telecel', value: 'Telecel' },
    ];

    const handleSave = () => {
        // Show OTP input field when Save button is tapped
        setOtpVisible(true);
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            {paymentClients.map((client) => (
                <TouchableOpacity key={client.id} style={styles.clientContainer}>
                    <Image source={client.image} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.clientName}>{client.name}</Text>
                        <Text style={styles.clientNumber}>{client.number}</Text>
                    </View>
                </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>+ Add new</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Add New Payment Method</Text>

                        <DropDownPicker
                            open={open}
                            value={selectedNetwork}
                            items={networkProviders}
                            setOpen={setOpen}
                            setValue={setSelectedNetwork}
                            setItems={() => {}}
                            placeholder="Select Network"
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownList}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Enter phone number"
                            keyboardType="numeric"
                            value={phoneNumber}
                            onChangeText={(text) => setPhoneNumber(text)}
                        />

                        {/* Conditionally show OTP input field after Save is tapped */}
                        {otpVisible && (
                            <TextInput
                                style={styles.input}
                                placeholder="Enter OTP"
                                keyboardType="numeric"
                                value={otpCode}
                                onChangeText={(text) => setOtpCode(text)}
                            />
                        )}

                        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
    },
    clientContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    image: {
        width: 61,
        height: 47,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    clientName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    clientNumber: {
        fontSize: 16,
        color: 'gray',
        marginTop: 7,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        gap: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    dropdown: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    dropdownList: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    saveButton: {
        backgroundColor: '#5E3A16',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    cancelButton: {
        padding: 15,
        borderRadius: 10,
    },
    cancelButtonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
});

