import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

const RealList = () => {
    const [searchText, setSearchText] = useState('');

    // Función para formatear la hora de envío del mensaje
    const formatMessageTime = messageTime => {
        const currentTime = new Date();
        const diffTime = Math.abs(currentTime - messageTime);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Si el mensaje fue enviado hace menos de una hora, muestra "Hace x minutos"
        if (diffTime < 3600000) {
            const diffMinutes = Math.ceil(diffTime / (1000 * 60));
            return `Hace ${diffMinutes} minutos`;
        }
        // Si el mensaje fue enviado hoy, muestra la hora
        else if (diffDays === 0) {
            return messageTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
            });
        }
        // Si el mensaje fue enviado ayer, muestra "Yesterday"
        else if (diffDays === 1) {
            return 'Yesterday';
        }
        // Si el mensaje fue enviado hace más de un día pero menos de una semana, muestra el día de la semana
        else if (diffDays < 7) {
            return messageTime.toLocaleDateString('en-US', { weekday: 'long' });
        }
        // Si el mensaje fue enviado hace más de una semana, muestra la fecha
        else {
            return messageTime.toLocaleDateString('en-US');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <Image
                        source={require('../images/moneda.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchInput}
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholder="Ingresa el monto a apostar..."
                        placeholderTextColor="white" // Cambiar el color del texto del marcador de posición a blanco
                    />
                </View>
            </View>
            <View style={styles.square}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    searchContainer: {
        marginBottom: 10,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
        marginLeft: 10,
        height: 50, // Establecer la misma altura que la entrada de texto
        borderColor: '#B6FF40', // Agregar borde verde
        borderWidth: 2, // Establecer el ancho del borde
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 16, // Tamaño de fuente aumentado
    },
    square: {
        width: 200,
        height: 200,
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderColor: '#B6FF40',
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 20,
    },
});

export default RealList;
