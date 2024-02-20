import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Perfil = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.value}>Juan Pérez</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Correo electrónico:</Text>
                <Text style={styles.value}>juan.perez@example.com</Text>
            </View>
            {/* Agrega más campos de perfil según sea necesario */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff', // Color de fondo blanco
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileInfo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    value: {
        flex: 1,
    },
});

export default Perfil;
