import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Referidos: React.FC = () => {
    const copyToClipboard = () => {
        // Lógica para copiar el código de referido al portapapeles
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis referidos</Text>
            <View style={styles.tableHeader}>
                <Text style={styles.headerText}>Fecha</Text>
                <Text style={styles.headerText}>Usuario</Text>
                <Text style={styles.headerText}>Comisión</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>27/07/2023 {'\n'}10:48 pm</Text>
                <Text style={styles.cell}>Tu Carry</Text>
                <Text style={styles.cell}>+2.00</Text>
            </View>
            {/* Información sobre referidos */}
            <View style={[styles.referidosContainer, { justifyContent: 'center' }]}>
                <Text style={styles.referidosTitle}>Recomienda ApuestaDota a un amigo y gana dinero extra</Text>
                <Text style={styles.referidosText}>1. Invita a tus amigos a unirse a ApuestaDota.</Text>
                <Text style={styles.referidosText}>2. Cuando tu amigo utilice tu código deberá realizar su primera apuesta. Después de completar con los requisitos, tú recibirás S/ 2.00 por cada referido!</Text>
                <Text style={styles.referidosText}>Tu código de referido es:</Text>
                <View style={styles.codeContainer}>
                    <Text style={styles.referidoCode}>XXAXEL123</Text>
                    <TouchableOpacity onPress={copyToClipboard}>
                        <Image source={require('../images/copiar.png')} style={styles.copyIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginBottom: 40,
        paddingHorizontal: 10,
        backgroundColor: '#121212', // Fondo oscuro para resaltar los colores "gamer"
        borderRadius: 10, // Bordes redondeados
        borderColor: '#00ff00', // Borde neón
        borderWidth: 2,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00ff00', // Color neón para el título
        textAlign: 'center',
        marginBottom: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#00ff00', // Línea divisoria neón
    },
    headerText: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color: '#FFFFFF', // Texto en blanco para contraste
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        backgroundColor: '#222', // Fondo más claro para las filas
        borderRadius: 5, // Bordes redondeados en las filas
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        color: '#00ff00', // Texto neón para las celdas
        paddingVertical: 5, // Espacio vertical para las celdas
    },
    referidosContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#222',
        borderRadius: 10,
    },
    referidosTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00ff00',
        marginBottom: 10,
    },
    referidosText: {
        color: '#FFFFFF',
        marginBottom: 5,
    },
    codeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    referidoCode: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00ff00',
        marginBottom: 10,
        marginRight: 10,
    },
    copyIcon: {
        width: 24,
        height: 24,
        tintColor: '#00ff00', // Color del ícono

    },
});

export default Referidos;
