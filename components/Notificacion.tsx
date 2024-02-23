import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Notificacion = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    const handleButtonPress = (buttonName: string) => {
        console.log(`Button ${buttonName} pressed`);
        setSelectedButton(buttonName);
        // Aquí puedes agregar la lógica que desees para cada botón
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notificaciones</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 'Apuesta Real' && styles.selectedButton]}
                    onPress={() => handleButtonPress('Apuesta Real')}>
                    <Text style={[styles.buttonText, selectedButton === 'Apuesta Real' && styles.selectedButtonText]}>APUESTA REAL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 'Apuesta de Práctica' && styles.selectedButton]}
                    onPress={() => handleButtonPress('Apuesta de Práctica')}>
                    <Text style={[styles.buttonText, selectedButton === 'Apuesta de Práctica' && styles.selectedButtonText]}>APUESTA DE PRÁCTICA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selectedButton === 'Versus 5 - 5' && styles.selectedButton]}
                    onPress={() => handleButtonPress('Versus 5 - 5')}>
                    <Text style={[styles.buttonText, selectedButton === 'Versus 5 - 5' && styles.selectedButtonText]}>VERSUS 5-5</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#121212', // Color de fondo oscuro para un estilo gamer
    },
    title: {
        color: '#39FF14', // Un verde fosforescente para el título, muy llamativo
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        alignSelf: "center",
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#61FF79', // Color principal del botón
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25, // Bordes redondeados para un look moderno
        shadowColor: '#0A1D21', // Sombra que combina con los colores del gradiente
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Elevación para Android
        width: 300,
        marginBottom: 10,
        alignSelf: "center"
    },
    selectedButton: {
        backgroundColor: '#FF5733', // Cambia el color de fondo cuando está seleccionado
    },
    buttonText: {
        color: '#0A1D21', // Texto que contrasta con el botón
        fontWeight: 'bold',
        textAlign: 'center',
    },
    selectedButtonText: {
        color: '#000000', // Cambia el color del texto a negro cuando está seleccionado
    },
});

export default Notificacion;
