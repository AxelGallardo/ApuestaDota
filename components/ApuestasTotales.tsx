import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ApuestasTotales: React.FC = () => {
    // Función para determinar el estilo basado en el valor del texto
    const getTextStyle = (text) => {
        // Verifica si el texto contiene un valor negativo
        if (text.includes('-')) {
            return [styles.cell, styles.negativeText]; // Aplica ambos estilos si es negativo
        }
        return styles.cell; // Solo el estilo base si no es negativo
    };

    return (
        <ScrollView horizontal>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Apuestas Realizadas</Text>
                    <View style={styles.tableHeader}>
                        <Text style={styles.headerText}>Fecha</Text>
                        <Text style={styles.headerText}>Partida</Text>
                        <Text style={styles.headerText}>Match ID</Text>
                        <Text style={styles.headerText}>Importe</Text>
                        <Text style={styles.headerText}>Multiplicador</Text>
                        <Text style={styles.headerText}>Estado</Text>
                        <Text style={styles.headerText}>Resultado</Text>
                    </View>
                    {/* Ejemplo de fila con número negativo */}
                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>27/07/2023 {'\n'}10:48 pm</Text>
                        <Text style={styles.cell}>Viper{'\n'}11:17 pm</Text>
                        <Text style={styles.cell}>7591013512</Text>
                        <Text style={styles.cell}>PEN 17.6</Text>
                        <Text style={styles.cell}>2.5</Text>
                        <Text style={styles.cell}>Finalizado</Text>
                        {/* Aplicar estilo condicionalmente */}
                        <Text style={getTextStyle('- 17.6')}>- 17.6</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>27/07/2023 {'\n'}10:48 pm</Text>
                        <Text style={styles.cell}>Viper{'\n'}11:17 pm</Text>
                        <Text style={styles.cell}>7591013512</Text>
                        <Text style={styles.cell}>PEN 17.6</Text>
                        <Text style={styles.cell}>2.5</Text>
                        <Text style={styles.cell}>Finalizado</Text>
                        {/* Aplicar estilo condicionalmente */}
                        <Text style={getTextStyle('+ 17.6')}>+ 17.6</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>27/07/2023 {'\n'}10:48 pm</Text>
                        <Text style={styles.cell}>Viper{'\n'}11:17 pm</Text>
                        <Text style={styles.cell}>7591013512</Text>
                        <Text style={styles.cell}>PEN 17.6</Text>
                        <Text style={styles.cell}>2.5</Text>
                        <Text style={styles.cell}>Finalizado</Text>
                        {/* Aplicar estilo condicionalmente */}
                        <Text style={getTextStyle('- 20.56')}>- 20.56</Text>
                    </View>

                    {/* Puedes agregar más filas de apuestas aquí */}

                </View>
            </ScrollView>
        </ScrollView>
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
        paddingHorizontal: 5, // Agregamos padding horizontal para separar las columnas
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        color: '#00ff00', // Texto neón para las celdas
        paddingVertical: 15, // Espacio vertical para las celdas
        marginHorizontal: 15, // Espacio horizontal para separar las celdas
    },

    negativeText: {
        color: 'red', // Estilo para texto negativo
    },

});

export default ApuestasTotales;
