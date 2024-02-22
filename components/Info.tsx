// Componente Informacion.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Informacion = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¿Cómo jugar?</Text>
            <View style={styles.menuContainer}>
                {['PERFIL', 'DEPÓSITO', 'RETIRO', 'TUTORIAL', 'TÉRMINOS Y CONDICIONES', 'INGRESAR'].map((item, index) => (
                    <TouchableOpacity key={index} style={styles.menuItem}>
                        <Text style={styles.menuItemText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#121212', // Un fondo oscuro para resaltar los colores fosforescentes
        paddingTop: 60,
    },
    title: {
        color: '#39FF14', // Un verde fosforescente para el título, muy llamativo
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
    },
    menuContainer: {
        width: '100%',
    },
    menuItem: {
        backgroundColor: '#123524', // Un verde oscuro como base para los botones
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: 20,
        borderWidth: 2, // Un borde para darle un toque distintivo
        borderColor: '#39FF14', // Verde fosforescente para el borde, haciendo juego con el título
    },
    menuItemText: {
        color: '#CCFF00', // Un color verde-amarillo fosforescente para el texto, garantiza visibilidad
        fontSize: 18,
        fontWeight: 'bold',
    },
});
export default Informacion;
