import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'; // Importa ScrollView
import MenuComponent from './MenuComponent';
import Perfil from './Perfil';
import Deposito from './Deposito';
import Retiro from './Retiro';
import Tutorial from './Tutorial';
import Terminos from './Terminos';
import Ingresar from './Ingresar';

const Configuracion = () => {
    const [activeScreen, setActiveScreen] = useState('');

    const handleSelectItem = (item) => {
        setActiveScreen(item); // Actualiza la pantalla activa basado en el ítem seleccionado
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewStyle}>
                <Text style={styles.title}>Menú</Text>
                <MenuComponent onSelectItem={handleSelectItem} />

                {activeScreen === 'PERFIL' ? <Perfil /> : null}
                {activeScreen === 'DEPOSITO' ? <Deposito /> : null}
                {activeScreen === 'RETIRO' ? <Retiro /> : null}
                {activeScreen === 'TUTORIAL' ? <Tutorial /> : null}
                {activeScreen === 'TERMINOS' ? <Terminos /> : null}
                {activeScreen === 'INGRESAR' ? <Ingresar /> : null}

                {/* Elimina el comentario para evitar errores */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#121212', // Un fondo oscuro para resaltar los colores fosforescentes
        paddingTop: 20,

    },
    title: {
        color: '#39FF14', // Un verde fosforescente para el título, muy llamativo
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
        alignSelf: "center",
    },
    scrollViewStyle: {
        width: '100%', // Asegura que el ScrollView ocupe todo el ancho disponible
    },
});

export default Configuracion;
