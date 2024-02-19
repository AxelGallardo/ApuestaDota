import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const CrearSala: React.FC = () => {
    const [montoApostar, setMontoApostar] = useState('');

    // Calcular comisión, precio de entrada, y ganancia basados en el monto a apostar
    const comision = parseFloat(montoApostar) * 0.1;
    const precioEntrada = parseFloat(montoApostar) + comision;
    const ganancia = montoApostar * 2; // Ejemplo de cálculo de ganancia

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Sala</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={montoApostar}
                onChangeText={setMontoApostar}
                placeholder="Ej. S/ 10"
                placeholderTextColor="#aaa" // Color de texto del placeholder

            />
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Monto de apuesta:</Text>
                <Text style={styles.value}>S/ {montoApostar}</Text>
                <Text style={styles.label}>Comisión 10%:</Text>
                <Text style={styles.commission}>S/ {comision.toFixed(2)}</Text>
                <Text style={styles.label}>Precio de entrada:</Text>
                <Text style={styles.entryPrice}>S/ {precioEntrada.toFixed(2)}</Text>
                <Text style={styles.label}>Ganancia:</Text>
                <Text style={styles.profit}>S/ {ganancia.toFixed(2)}</Text>
            </View>

            <View style={styles.infoContainer2}>
                <Text style={styles.info}>
                    Hola gamer,
                    {'\n\n'}
                    Estás a punto de crear una sala, como Host vas a recibir el 10%, del monto de ganancia que elijas, por ejemplo:
                    {'\n\n'}
                    Si el precio de entrada es de {precioEntrada.toFixed(2)} soles, la ganancia para cada jugador ganador es de {ganancia.toFixed(2)} soles.
                    {'\n\n'}
                    Tú, como Host recibes {ganancia.toFixed(2) * 0.1} soles, independientemente si ganas o pierdes.
                    {'\n\n'}
                    A cambio tienes que crear la sala y fomentar una buena comunicación entre los participantes.
                </Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Crear Sala</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'transparent', // Fondo oscuro para el tema futurista
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CDEDE6', // Texto blanco para contraste
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#06B9C9',
        borderWidth: 1,
        marginVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        fontSize: 16,
        color: '#FFFFFF', // Texto blanco
        backgroundColor: '#1A1A1AD9', // Fondo semitransparente para efecto futurista
        width: '100%',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    infoContainer: {
        backgroundColor: '#7FFF9F', // Fondo claro para la información
        borderRadius: 8,
        padding: 15,
        marginVertical: 20,
        width: '100%',
    },

    infoContainer2: {
        backgroundColor: '#023B', // Fondo claro para la información
        borderRadius: 8,
        padding: 15,
        marginVertical: 20,
        width: '100%',
    },

    label: {
        fontWeight: 'bold',
        color: '#333333', // Texto oscuro para etiquetas
    },
    value: {
        color: '#000000', // Texto oscuro para valores
        marginBottom: 5,
    },
    commission: {
        color: '#E63946', // Rojo para la comisión
        marginBottom: 5,
    },
    entryPrice: {
        color: '#F4A261', // Naranja para el precio de entrada
        marginBottom: 5,
    },
    profit: {
        color: '#2A9D8F', // Verde para la ganancia
        marginBottom: 5,
    },
    info: {
        textAlign: 'center',
        color: '#FFFFFF', // Texto blanco para información adicional
        marginBottom: 20,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#61FF79', // Color principal del botón
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25, // Bordes redondeados para un look moderno
        shadowColor: '#0A1D21', // Sombra que combina con los colores del gradiente
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Elevación para Android
        width: 300,
        marginTop: 20,
        marginBottom: 50,
    },
    buttonText: {
        color: '#0A1D21', // Texto que contrasta con el botón
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
});

export default CrearSala;
