import React, { useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet ,StatusBar } from 'react-native';

const FeedbackScreen = () => {
    const textInputRef = useRef<TextInput>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            textInputRef.current?.focus();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <TextInput
                ref={textInputRef}
                style={styles.textArea}
                placeholder="Type message here..."
                multiline
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
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },
});

export default FeedbackScreen;