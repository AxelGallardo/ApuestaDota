import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Retiro: React.FC = () => {
    const [montoRetiro, setMontoRetiro] = useState('');
    const [metodoRetiro, setMetodoRetiro] = useState('');

    const handleRetiro = () => {
        // Aquí puedes manejar la lógica para procesar el retiro
        // Por ejemplo, enviar el monto y el método de retiro a la API
        console.log('Monto a retirar:', montoRetiro);
        console.log('Método de retiro seleccionado:', metodoRetiro);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>Hola dotero, tu saldo actual es:</Text>
            <Text style={styles.saldo}>S/ 75.00</Text>

            <Text style={styles.texto}>Ingresa el monto que deseas retirar</Text>
            <TextInput
                style={styles.input}
                value={montoRetiro}
                onChangeText={setMontoRetiro}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#8CFA9D"
            />
            <Text style={styles.texto}>El monto mínimo para retirar es de S/ 20.00.</Text>

            <Text style={styles.texto}>Los retiros se realizan en un plazo de 24 horas hábiles y pueden tardar hasta 48 horas hábiles.</Text>
            <Text style={styles.texto}>No se puede retirar dinero a cuentas que no pertenezcan al titular de la cuenta.</Text>

            <Text style={styles.texto}>Elige el método para retirar</Text>
            <TouchableOpacity onPress={() => setMetodoRetiro('Transferencia')} style={styles.metodoButton}>
                <Text style={styles.metodoText}>Transferencia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMetodoRetiro('Yape')} style={styles.metodoButton}>
                <Text style={styles.metodoText}>Yape</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMetodoRetiro('Plin')} style={styles.metodoButton}>
                <Text style={styles.metodoText}>Plin</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRetiro} style={styles.customButton}>
                <Text style={styles.buttonText}>Realizar Retiro</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212', // Color de fondo oscuro para un estilo gamer
    },
    texto1: {
        marginBottom: 10,
        color: '#ffffff', // Color de texto blanco para contraste
        alignSelf: "center",
    },
    texto: {
        marginBottom: 10,
        color: '#ffffff', // Color de texto blanco para contraste
    },
    saldo: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff', // Color de texto blanco para contraste
        alignSelf: "center",
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
    metodoButton: {
        backgroundColor: '#FFFF00', // Color verde claro
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 250,
        textAlign: 'center',
        marginBottom: 10,
        alignSelf: "center",
    },
    metodoText: {
        color: '#121212', // Texto oscuro para contraste con el botón neón
        fontWeight: 'bold',
        alignSelf: "center",
    },
    customButton: {
        backgroundColor: '#00ff00', // Botón neón
        borderRadius: 5, // Bordes redondeados para el botón
        padding: 10,
        marginTop: 20, // Espacio entre botones
        alignItems: 'center', // Alinear texto del botón al centro
    },
    buttonText: {
        color: '#121212', // Texto oscuro para contraste con el botón neón
        fontWeight: 'bold',
    },
});

export default Retiro;
