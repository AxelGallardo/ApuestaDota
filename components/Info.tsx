// Componente Informacion.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Informacion = () => {
    return (
        <View style={styles.container}>
            <Text>Información de la Aplicación</Text>
            {/* Aquí puedes agregar más detalles sobre tu aplicación */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Informacion;
