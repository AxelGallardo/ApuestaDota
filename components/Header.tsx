import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = ({ onSettingsPress, onInfoPress }) => {


    return (
        <View style={styles.header}>
            <View style={styles.olimpoContainer}>
                <Image source={require('../images/apuestadota.png')} style={styles.headerImage} />
            </View>


            <TouchableOpacity onPress={onInfoPress} style={styles.infoButton}>
                <Image source={require('../images/informacion.png')} style={styles.infoIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onSettingsPress} style={styles.settingsButton}>
                <Image source={require('../images/engranaje.png')} style={styles.settingsIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent', // Cambiado el color de fondo
        paddingVertical: 20, // Modificado para mayor espacio
        paddingHorizontal: 15, // Modificado para mayor espacio
    },
    olimpoContainer: {
        flex: 1, // Modificado para ocupar espacio restante
        alignItems: 'flex-start', // Alineado hacia la izquierda
        justifyContent: 'flex-start', // Alineado hacia la izquierda
        marginLeft: 0, // Ajuste del margen izquierdo
    },
    headerImage: {
        width: 250, // Ajusta el ancho de la imagen según sea necesario
        height: 36, // Ajusta el alto de la imagen según sea necesario
    },
    settingsButton: {
        padding: 10,
    },
    settingsIcon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    },
    infoButton: {
        padding: 10,
    },
    infoIcon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    },
});

export default Header;
