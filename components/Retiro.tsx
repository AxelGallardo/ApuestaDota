import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Retiro = () => {
    const [cantidad, setCantidad] = useState('');

    const realizarRetiro = () => {
        alert(`Retiro de $${cantidad} solicitado con éxito.`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Retirar Dinero</Text>
            <TextInput
                style={styles.input}
                value={cantidad}
                onChangeText={setCantidad}
                keyboardType="numeric"
                placeholder="Cantidad a retirar"
                placeholderTextColor="#666"
            />
            <TouchableOpacity style={styles.button} onPress={realizarRetiro}>
                <Text style={styles.buttonText}>Retirar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Retiro;
