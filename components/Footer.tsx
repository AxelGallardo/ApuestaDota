import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = ({ changeContent }) => {
    const [selectedButton, setSelectedButton] = useState('Real');

    const handleButtonPress = (buttonName) => {
        changeContent(buttonName);
        setSelectedButton(buttonName);
    };

    const Button = ({ name, label }) => (
        <TouchableOpacity
            style={[styles.button, selectedButton === name && styles.selectedButton]}
            onPress={() => handleButtonPress(name)}>
            <Text style={[styles.buttonText, selectedButton === name && styles.selectedButtonText]}>
                {label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Elige el tipo de apuesta</Text>
            <View style={styles.footer}>
                <Button name="Real" label="Real" />
                <Button name="Practica" label="Práctica" />
                <Button name="Versus" label="Versus" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "transparent",
        borderTopColor: "#B6FF40",
        borderWidth: 1,
    },
    headerText: {
        fontSize: 16,
        color: '#FFD700', // Oro para un toque cyberpunk
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 65,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A40', // Fondo oscuro para un look futurista
        borderWidth: 2,
        borderColor: '#FFD700', // Bordes oro para contraste
    },
    selectedButton: {
        backgroundColor: '#B6FF40', // Naranja intenso para el botón seleccionado, vibrante cyberpunk
    },
    buttonText: {
        color: '#FFFFFF', // Texto blanco para contraste
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    selectedButtonText: {
        color: '#000000', // Texto negro para resaltar sobre el naranja
    },
});

export default Footer;
