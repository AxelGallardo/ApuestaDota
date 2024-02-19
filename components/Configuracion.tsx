import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Configuracion = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>Configuración</Text>
            {/* Aquí puedes agregar cualquier contenido relacionado con la configuración */}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        // Considera agregar un backgroundColor si es necesario para ocultar el contenido detrás
    },


    containerText: {
        color: '#fff', // Texto que contrasta con el botón
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },




});

export default Configuracion;
