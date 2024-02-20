import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Terminos = () => {
    const [cantidad, setCantidad] = useState('');

    const realizarDeposito = () => {
        // Aquí iría la lógica para procesar el depósito
        alert(`Depósito de $${cantidad} realizado con éxito.`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Depositar Dinero</Text>
            <TextInput
                style={styles.input}
                value={cantidad}
                onChangeText={setCantidad}
                keyboardType="numeric"
                placeholder="Cantidad a depositar"
                placeholderTextColor="#666"
            />
            <TouchableOpacity style={styles.button} onPress={realizarDeposito}>
                <Text style={styles.buttonText}>Depositar</Text>
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
        color: '#ffffff',
        fontSize: 18,
    },
});

export default Terminos;
