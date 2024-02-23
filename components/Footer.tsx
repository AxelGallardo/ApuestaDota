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
            <Text style={styles.headerText}>Elige el tipo de apuesta...</Text>
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
        borderTopColor: "#06B9C9",
        borderWidth: 0.5,
    },
    headerText: {
        fontSize: 16,
        color: '#C7FCF1', // Oro para un toque cyberpunk
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
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#61FF79', // Fondo oscuro para un look futurista
        borderWidth: 2,
        borderColor: 'transparent', // Bordes oro para contraste
    },
    selectedButton: {
        backgroundColor: '#FF5733', // #0C9610 Naranja intenso para el botón seleccionado, vibrante cyberpunk
    },
    buttonText: {
        color: '#0A1D21', // Texto blanco para contraste
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    selectedButtonText: {
        color: '#0A1D21', // Texto negro para resaltar sobre el naranja
    },
});

export default Footer;
