import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

const RealList = () => {
    const [searchText, setSearchText] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    // Función para validar y actualizar el valor del input
    const handleInputChange = (text) => {
        // Expresión regular para aceptar solo números y decimales hasta 2 cifras
        const regex = /^[0-9]*(\.[0-9]{0,2})?$/;
        // Si el texto cumple con la expresión regular o está vacío, y es menor o igual a 50, actualizamos el estado
        if (text === '' || (regex.test(text) && parseFloat(text) <= 50)) {
            setSearchText(text);
        }
    };

    // Función para manejar el cambio de estado del checkbox
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
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
                        onChangeText={handleInputChange}
                        placeholder="Ingresa el monto a apostar..."
                        placeholderTextColor="white"
                        keyboardType="numeric" // Establecer el teclado numérico
                    />
                </View>
                <Text style={styles.instructions}>
                    El monto de apuesta es de 1 a 50 soles
                </Text>
            </View>
            <View style={styles.square}>
                <TouchableOpacity onPress={toggleCheckbox} style={[styles.checkbox, isChecked && styles.checked]}>
                    {isChecked && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
                <Text style={styles.checkboxText}>Ganar la siguiente partida clasificatoria  {'\n'}{'\n'}
                    Cuota: x 1.40
                    {'\n'}Recompensa: x {searchText !== '' ? parseFloat(searchText) * 1.4 : '...'}</Text>

                {/* Agrega más checkboxes y texto aquí si es necesario */}
            </View>

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
        height: 50,
        borderColor: '#B6FF40',
        borderWidth: 2,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 16,
    },
    square: {
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderColor: '#B6FF40',
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 20,
        padding: 10,
        flexDirection: 'row', // Alinear elementos horizontalmente
        alignItems: 'center', // Centrar verticalmente
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#B6FF40',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10, // Espacio a la derecha del círculo del check
    },
    checked: {
        backgroundColor: '#B6FF40',
    },
    checkmark: {
        color: 'black',
        fontSize: 18,
    },
    checkboxText: {
        color: 'white',
        fontSize: 16,
    },
    instructions: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default RealList;
