import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Perfil = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil del Usuario</Text>
            {/* Aquí podrías cargar y mostrar información real del usuario */}
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Nombre: Juan Pérez</Text>
                <Text style={styles.infoText}>Correo: juan.perez@example.com</Text>
            </View>
            <Button title="Editar Perfil" onPress={() => console.log('Editar Perfil')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoContainer: {
        marginBottom: 20,
    },
    infoText: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default Perfil;
