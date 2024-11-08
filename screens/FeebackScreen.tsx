import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, StatusBar, Button } from 'react-native';
import ToastManager, { Toast } from 'toastify-react-native';

const FeedbackScreen = () => {
    const textInputRef = useRef<TextInput>(null);
    const [feedback, setFeedback] = useState('');

    const submitFeedback = async () => {
        try {
            const response = await fetch('https://fiakapi-1.onrender.com/api/feedback/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ feedback }),
            });
            const data = await response.json();

            console.log(data);

            // Show success or error toast based on the response
            // if (data.status === 'success') {
            Toast.success('Feedback submitted successfully.');
            //     setFeedback(''); // Clear feedback after submission
            // } else {
            //     Toast.error('Failed to submit feedback. Please try again.');
            // }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            Toast.error('An error occurred while submitting feedback.');
        }
    };

    return (
        <View style={styles.container}>
            <ToastManager style={styles.toastManager} />
            {/* <StatusBar hidden={true} /> */}
            <TextInput
                ref={textInputRef}
                style={styles.textArea}
                placeholder="Type message here..."
                multiline
                value={feedback}
                onChangeText={setFeedback}
            />
            <Button
                title="Submit Feedback"
                onPress={submitFeedback}
                disabled={!feedback.trim()} // Disable button if feedback is empty
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    textArea: {
        height: 350,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 16,
    },
    toastManager: {
        position: 'absolute',
        bottom: 50, // Adjust the position as needed
        left: '45%',
        transform: [{ translateX: -100 }], // Center the toast
        width: '80%', // Adjust the width
        borderRadius: 10, // Rounded corners
        padding: 10, // Padding inside the toast
    },
});

export default FeedbackScreen;
