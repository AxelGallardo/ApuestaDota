import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Deposito: React.FC = () => {
    const [monto, setMonto] = useState('');
    const [codigoReferido, setCodigoReferido] = useState('');
    const [aceptarCondiciones, setAceptarCondiciones] = useState(false);

    const handleDeposito = () => {
        // Aquí puedes manejar la lógica para procesar el depósito
        // Por ejemplo, enviar el monto y el código de referido a la API
        console.log('Monto a depositar:', monto);
        console.log('Código de referido:', codigoReferido);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Hola dotero, ingresa el monto a depositar</Text>
            <TextInput
                style={styles.input}
                value={monto}
                onChangeText={setMonto}
                keyboardType="numeric"
                placeholder="S/ 10"
                placeholderTextColor="#8CFA9D"
            />
            <Text style={styles.texto}>(El monto mínimo de depósito es S/ 10 y el máximo es S/ 500)</Text>

            <Text style={styles.texto}>Código de referido (opcional)</Text>
            <TextInput
                style={styles.input}
                value={codigoReferido}
                onChangeText={setCodigoReferido}
                placeholder="Ingresa tu código de referido"
                placeholderTextColor="#8CFA9D"
            />

            <View style={styles.condicionesContainer}>
                <TouchableOpacity onPress={() => setAceptarCondiciones(!aceptarCondiciones)}>
                    <Text style={styles.condicionesTexto}>Acepto que al usar un código de referido recibiré el 10% adicional al valor del primer deposito y me obligo a jugar por lo menos 10 partidas antes de solicitar algún retiro de fondos.</Text>
                </TouchableOpacity>
                <View style={styles.checkboxContainer}>
                    <View style={styles.checkbox}></View>
                    {aceptarCondiciones && <Text style={styles.checkboxText}>✓</Text>}
                </View>
            </View>

            <TouchableOpacity onPress={handleDeposito} style={styles.customButton}>
                <Text style={styles.buttonText}>IR A PAGAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginBottom: 250,
        backgroundColor: '#121212', // Color de fondo oscuro para un estilo gamer
    },
    texto: {
        marginBottom: 10,
        textAlign: 'center',
        color: '#ffffff', // Color de texto blanco para contraste
    },
    input: {
        backgroundColor: '#222', // Fondo más claro para inputs
        color: '#fff', // Texto en blanco para mayor contraste
        borderRadius: 5, // Bordes redondeados para inputs
        borderWidth: 1,
        borderColor: '#00ff00', // Borde neón para inputs
        marginBottom: 10,
        paddingHorizontal: 10, // Padding horizontal para el texto dentro del input
        paddingVertical: 5, // Espacio vertical más cómodo
        fontSize: 16,
        textAlign: 'center',
    },
    condicionesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    condicionesTexto: {
        flex: 1,
        color: '#ffffff', // Color de texto blanco para contraste
    },
    checkboxContainer: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        width: 12,
        height: 12,
        backgroundColor: '#007bff',
        borderRadius: 2,
    },
    checkboxText: {
        color: '#007bff',
        fontWeight: 'bold',
    },
    customButton: {
        backgroundColor: '#00ff00', // Botón neón
        borderRadius: 5, // Bordes redondeados para el botón
        padding: 10,
        marginBottom: 10, // Espacio entre botones
        alignItems: 'center', // Alinear texto del botón al centro
    },
    buttonText: {
        color: '#121212', // Texto oscuro para contraste con el botón neón
        fontWeight: 'bold',
    },
});

export default Deposito;
