import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const MiSala: React.FC<{ onLeave: () => void }> = ({ onLeave }) => {
    const players = Array.from({ length: 10 }, (_, index) => `Jugador ${index + 1}`);

    return (
        <ScrollView contentContainerStyle={styles.container}>
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
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText}>Listo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAbandonar} onPress={onLeave}>
                    <Text style={styles.buttonText}>Abandonar Sala</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Detalles de la sala</Text>
                <Text style={styles.detailsText}>Host: Admin</Text>
                <Text style={styles.detailsText}>SteamID: 157748065</Text>
                <Text style={styles.highlightedText}>Nombre de la sala: Nombre de la sala</Text>
                <Text style={styles.highlightedText}>Contraseña de la sala: Contraseña de la sala</Text>
                <Text style={styles.detailsInfo}>El host debe crear la sala con estas características mínimas o lo puedes reportar</Text>
                <Text style={styles.detailsText}>Modo: Elección Libre</Text>
                <Text style={styles.detailsText}>Espectadores: No</Text>
                <Text style={styles.detailsText}>Servidor: Perú</Text>
                <Text style={styles.detailsText}>Visibilidad de la sala: Pública</Text>
                <Text style={styles.detailsText}>Trucos: Desactivados</Text>
                <Text style={styles.detailsInfo}>Información adicional</Text>
                <Text style={styles.detailsText}>Ingreso: S/ 11</Text>
                <Text style={styles.detailsText}>Ganancia: S/ 20</Text>
                <Text style={styles.detailsWarning}>No olvides reportar conducta ofensiva, emos, feeders o cualquier acción fraudulenta mediante un video enviado al ícono de Contacto.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CDEDE6',
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
    }, detailsContainer: {
        backgroundColor: '#121212', // Fondo oscuro para los detalles
        padding: 20,
        borderRadius: 5,
        margin: 10,
        borderWidth: 1,
        borderColor: '#2A9D8F', // Borde para destacar la sección
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 16,
        color: '#BBBBBB',
        marginBottom: 5,
    },
    detailsInfo: {
        fontSize: 14,
        color: '#AAAAAA',
        fontStyle: 'italic',
        marginBottom: 10,
    },
    detailsWarning: {
        fontSize: 14,
        color: '#E63946', // Rojo para advertencias
        marginTop: 10,
    },
    highlightedText: {
        fontSize: 16,
        color: '#4CAF50', // Un color verde brillante para resaltar
        fontWeight: 'bold', // Opcional: añadir negrita para mayor énfasis
        marginBottom: 5,
    },
    // Asegúrate de ajustar o añadir estilos según sea necesario...
});

export default MiSala;