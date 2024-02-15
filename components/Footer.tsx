import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = ({ changeContent }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (buttonName) => {
        changeContent(buttonName);
        setSelectedButton(buttonName);
    };

    const Button = ({ name, label }) => (
        <TouchableOpacity
            style={[styles.button, selectedButton === name && styles.selectedButton]}
            onPress={() => handleButtonPress(name)}>
            <Text style={[styles.buttonText, selectedButton === name && styles.selectedButtonText]}>
                <Text style={styles.buttonLine}>{label.split(' ')[0]}</Text>{'\n'}
                <Text style={styles.buttonLine}>{label.split(' ')[1]}</Text>
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Elige el tipo de apuesta</Text>
            <View style={styles.footer}>
                <Button name="Real" label="Individual Real" />
                <Button name="Practica" label="Individual Práctica" />
                <Button name="Versus" label="5vs5 Versus" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "transparent",
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF', // Cambiar a color blanco
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
        overflow: 'hidden',
        elevation: 5,
        backgroundColor: '#3E3E70', // Color de botón gris
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: '#B6FF40', // Color de botón verde cuando está seleccionado
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    selectedButtonText: {
        color: '#000000', // Color de texto negro cuando está seleccionado
    },
    buttonLine: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Footer;
