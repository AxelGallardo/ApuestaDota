import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const MenuComponent = ({ onSelectItem }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        onSelectItem(item);
    };

    return (
        <View style={styles.menuContainer}>
            {['INGRESAR', 'PERFIL', 'DEPOSITO', 'RETIRO', 'TUTORIAL', 'TERMINOS'].map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.menuItem,
                        selectedItem === item && styles.selectedItem,
                    ]}
                    onPress={() => handleSelectItem(item)}
                >
                    <Text style={[styles.menuItemText, selectedItem === item && styles.selectedItemText]}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        width: '100%',
        backgroundColor: 'transparent',

    },


    menuItem: {
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
        marginTop: 0,
        marginBottom: 10,
        alignSelf: "center"
    },



    selectedItem: {
        backgroundColor: '#FF5733', // Cambia el color de fondo cuando está seleccionado
        marginBottom: 10,

    },


    menuItemText: {
        color: '#0A1D21', // Texto que contrasta con el botón
        fontWeight: 'bold',
        textAlign: 'center',


    },


    selectedItemText: {
        color: '#000000', // Cambia el color del texto a negro cuando está seleccionado


    },
});

export default MenuComponent;
