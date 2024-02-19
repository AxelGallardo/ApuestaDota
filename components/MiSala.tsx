import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


// Se añade la prop onLeave a las props del componente
const MiSala: React.FC<{ onLeave: () => void }> = ({ onLeave }) => {
    const players = Array.from({ length: 10 }, (_, index) => `Jugador ${index + 1}`);

    const handleReady = () => {
        // Lógica para cuando se presiona el botón de "Listo"
    };

    // Se modifica handleLeave para llamar a onLeave, que cambiará el componente mostrado
    const handleLeave = () => {
        onLeave(); // Esto notificará al componente padre para cambiar la vista
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Sala</Text>
            <View style={styles.columnContainer}>
                <View style={styles.column}>
                    <Text style={styles.columnTitleRadiant}>Radiant</Text>
                    {players.slice(0, 5).map((player, index) => (
                        <View key={index} style={styles.playerSlot}>
                            <Text style={styles.playerName}>{player}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.column}>
                    <Text style={styles.columnTitleDire}>Dire</Text>
                    {players.slice(5, 10).map((player, index) => (
                        <View key={index} style={styles.playerSlot}>
                            <Text style={styles.playerName}>{player}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleReady}>
                    <Text style={styles.buttonText}>Listo</Text>
                </TouchableOpacity>
                {/* Se usa la prop onLeave en el evento onPress del botón "Abandonar Sala" */}
                <TouchableOpacity style={styles.buttonAbandonar} onPress={handleLeave}>
                    <Text style={styles.buttonText}>Abandonar Sala</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Estilos permanecen sin cambios
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
        marginVertical: 20,
        paddingHorizontal: 20,
        alignSelf: "center",
    },
    columnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    columnTitleRadiant: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFF',
        // Aplicar sombra como "borde"
        textShadowColor: 'blue', // Color verde para la sombra
        textShadowOffset: { width: 0, height: -2 }, // Dirección de la sombra
        textShadowRadius: 10, // Sin difuminado para simular un borde más definido
    },

    columnTitleDire: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFF',
        // Aplicar sombra como "borde"
        textShadowColor: 'red', // Color verde para la sombra
        textShadowOffset: { width: 0, height: -2 }, // Dirección de la sombra
        textShadowRadius: 10, // Sin difuminado para simular un borde más definido
    },
    playerSlot: {
        width: '90%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#1A1A1AD9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    playerName: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#6BA60D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '40%',
    },

    buttonAbandonar: {
        backgroundColor: '#F73B2A',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '40%',
    },



    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: "center",
    },
});

export default MiSala;
