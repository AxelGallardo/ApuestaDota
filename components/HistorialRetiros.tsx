import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HistorialRetiros: React.FC = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Solicitudes de retiro de fondos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <View>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.headerText, styles.flex2]}>Fecha y Hora</Text>
                        <Text style={styles.headerText}>Importe</Text>
                        <Text style={styles.headerText}>Estado</Text>
                        <Text style={styles.headerText}>Medio</Text>
                    </View>
                    { /* Ejemplo de fila con fecha y hora separadas */}
                    <View style={styles.tableRow}>
                        <View style={[styles.cell, styles.flex2, styles.dateCell]}>
                            <Text style={styles.dateText}>27/07/2023</Text>
                            <Text style={styles.timeText}>10:48 pm</Text>
                        </View>
                        <Text style={styles.cell}>20.00</Text>
                        <Text style={styles.cell}>Rechazado</Text>
                        <Text style={styles.cell}>Yape</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.cell, styles.flex2, styles.dateCell]}>
                            <Text style={styles.dateText}>27/07/2023</Text>
                            <Text style={styles.timeText}>10:48 pm</Text>
                        </View>
                        <Text style={styles.cell}>20.00</Text>
                        <Text style={styles.cell}>Rechazado</Text>
                        <Text style={styles.cell}>Yape</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={[styles.cell, styles.flex2, styles.dateCell]}>
                            <Text style={styles.dateText}>27/07/2023</Text>
                            <Text style={styles.timeText}>10:48 pm</Text>
                        </View>
                        <Text style={styles.cell}>20.00</Text>
                        <Text style={styles.cell}>Rechazado</Text>
                        <Text style={styles.cell}>Yape</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={[styles.cell, styles.flex2, styles.dateCell]}>
                            <Text style={styles.dateText}>27/07/2023</Text>
                            <Text style={styles.timeText}>10:48 pm</Text>
                        </View>
                        <Text style={styles.cell}>20.00</Text>
                        <Text style={styles.cell}>Rechazado</Text>
                        <Text style={styles.cell}>Yape</Text>
                    </View>



                </View>
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#121212',
        borderRadius: 10,
        borderColor: '#00ff00',
        borderWidth: 2,
    },
    scrollContainer: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00ff00',
        textAlign: 'center',
        marginBottom: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#00ff00',
    },
    headerText: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    flex2: {
        flex: 2, // Ajusta según sea necesario para acomodar la fecha y la hora
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        backgroundColor: '#222',
        borderRadius: 5,
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        color: '#00ff00',
        paddingVertical: 5,
        marginHorizontal: 15,
    },
    dateCell: {
        flexDirection: 'column', // Alinea verticalmente la fecha y la hora
    },
    dateText: {
        color: '#00ff00',
        // Ajusta según sea necesario
    },
    timeText: {
        color: '#00ff00',
        // Ajusta según sea necesario
    },
});

export default HistorialRetiros;