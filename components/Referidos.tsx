import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Referidos: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movimientos de cuenta</Text>
            <View style={styles.tableHeader}>
                <Text style={styles.headerText}>Fecha</Text>
                <Text style={styles.headerText}>Importe</Text>
                <Text style={styles.headerText}>Origen</Text>

            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>27/07/2023 {'\n'}10:48 pm</Text>
                <Text style={styles.cell}>20.00</Text>
                <Text style={styles.cell}>APUESTA PERDIDA</Text>

            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>20/06/2023 {'\n'}10:46 pm</Text>
                <Text style={styles.cell}>20.00</Text>
                <Text style={styles.cell}>APUESTA GANADA</Text>

            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>19/04/2023 {'\n'}01:38 pm</Text>
                <Text style={styles.cell}>25.00</Text>
                <Text style={styles.cell}>DEPOSITO</Text>

            </View>
            <View style={styles.tableRow}>
                <Text style={styles.cell}>07/03/2023 {'\n'}02:43 pm</Text>
                <Text style={styles.cell}>20.00</Text>
                <Text style={styles.cell}>RETIRO</Text>

            </View>

            <View style={styles.tableRow}>
                <Text style={styles.cell}>07/03/2023 {'\n'}02:41 pm</Text>
                <Text style={styles.cell}>2.00</Text>
                <Text style={styles.cell}>BONO</Text>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
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
});

export default Referidos;