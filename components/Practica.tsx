import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Practica = () => {
    return (
        <View style={styles.chat}>
            <Text style={styles.chatText}>Practica</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chat: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatText: {
        fontSize: 20,
        color: 'white',
    },
});

export default Practica;
