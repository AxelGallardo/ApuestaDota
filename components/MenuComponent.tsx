import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuComponent = ({ onSelectItem }) => {
    return (
        <View style={styles.menuContainer}>
            {['INGRESAR', 'PERFIL', 'DEPOSITO', 'RETIRO', 'TUTORIAL', 'TERMINOS'].map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuItem} onPress={() => onSelectItem(item)}>
                    <Text style={styles.menuItemText}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        width: '100%',
    },
    menuItem: {
        backgroundColor: '#123524', // Un verde oscuro como base para los botones
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: 20,
        borderWidth: 2, // Un borde para darle un toque distintivo
        borderColor: '#39FF14', // Verde fosforescente para el borde, haciendo juego con el título
    },
    menuItemText: {
        color: '#CCFF00', // Un color verde-amarillo fosforescente para el texto, garantiza visibilidad
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default MenuComponent;
