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
                    {/* Agregar la imagen a la izquierda del círculo blanco */}
                    <Image
                        source={require('../images/ganarsiguiente.png')}
                        style={styles.checkboxImage}
                    />
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                    <Text style={styles.boldText}>Ganar la siguiente partida clasificatoria</Text>{'\n\n'}
                    <Text style={styles.yellowText}>Cuota:</Text>
                    <Text style={styles.greenText}> x 1.40</Text>
                    {'\n'}Recompensa: {searchText !== '' ? (parseFloat(searchText) * 1.4).toFixed(2) : '...'}
                </Text>

                {/* Agrega más checkboxes y texto aquí si es necesario */}
            </View>


            <View style={styles.square}>
                <TouchableOpacity onPress={toggleCheckbox} style={[styles.checkbox, isChecked && styles.checked]}>
                    {/* Agregar la imagen a la izquierda del círculo blanco */}
                    <Image
                        source={require('../images/ganar2.png')}
                        style={styles.checkboxImage}
                    />
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                    <Text style={styles.boldText}>Ganar con 0 muertes</Text>{'\n\n'}
                    <Text style={styles.yellowText}>Cuota:</Text>
                    <Text style={styles.greenText}> x 2.50</Text>
                    {'\n'}Recompensa: {searchText !== '' ? (parseFloat(searchText) * 2.5).toFixed(2) : '...'}
                </Text>

                {/* Agrega más checkboxes y texto aquí si es necesario */}
            </View>



            <View style={styles.square}>
                <TouchableOpacity onPress={toggleCheckbox} style={[styles.checkbox, isChecked && styles.checked]}>
                    {/* Agregar la imagen a la izquierda del círculo blanco */}
                    <Image
                        source={require('../images/ganar3.png')}
                        style={styles.checkboxImage}
                    />
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                    <Text style={styles.boldText}>Desafío Support:</Text> {'\n'}
                    <Text style={styles.describirText}>
                        Ganar con Crystal Maiden, {'\n'}
                        Disruptor, Io, Oracle o {'\n'}
                        Enigma
                    </Text>
                    {'\n'}{'\n'}
                    <Text style={styles.yellowText}>Cuota:</Text>
                    <Text style={styles.greenText}> x 1.42</Text>
                    {'\n'}Recompensa: {searchText !== '' ? (parseFloat(searchText) * 1.42).toFixed(2) : '...'}
                </Text>

                {/* Agrega más checkboxes y texto aquí si es necesario */}
            </View>

            <View style={styles.square}>
                <TouchableOpacity onPress={toggleCheckbox} style={[styles.checkbox, isChecked && styles.checked]}>
                    {/* Agregar la imagen a la izquierda del círculo blanco */}
                    <Image
                        source={require('../images/ganar4.png')}
                        style={styles.checkboxImage}
                    />
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                    <Text style={styles.boldText}>Desafío Tanque:</Text> {'\n'}
                    <Text style={styles.describirText}>
                        Ganar con Pudge, Tiny {'\n'}
                        Timbersaw, Beastmaster {'\n'}
                        o Treant Protector
                    </Text>
                    {'\n'}{'\n'}
                    <Text style={styles.yellowText}>Cuota:</Text>
                    <Text style={styles.greenText}> x 1.42</Text>
                    {'\n'}Recompensa: {searchText !== '' ? (parseFloat(searchText) * 1.42).toFixed(2) : '...'}
                </Text>

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
        backgroundColor: '#1F1F37', // Cambiar el color del fondo a negro
        borderRadius: 20,
        borderColor: '#1F1F37',
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 20,
        padding: 10,
        flexDirection: 'row', // Alinear elementos horizontalmente
        alignItems: 'center', // Centrar verticalmente
        width: 320, // Ajusta el ancho de la imagen según sea necesario
        height: 160, // Ajusta la altura de la imagen según sea necesario
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10, // Espacio a la derecha del círculo del check
    },
    checkboxImage: {
        width: 60, // Ajusta el ancho de la imagen según sea necesario
        height: 160, // Ajusta la altura de la imagen según sea necesario
        marginRight: -500, // Espacio entre la imagen y el círculo blanco
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
        flexShrink: 1, // Permite que el texto se ajuste en caso de ser muy largo
    },

    yellowText: {
        color: '#EDBD0E',
        fontWeight: 'bold',
        fontSize: 16,
    },

    greenText: {
        color: '#B6FF39',
        fontWeight: 'bold',
        fontSize: 18,
    },

    boldText: {
        fontWeight: 'bold',
    },

    describirText: {
        color: '#B3B3B3',
        fontSize: 14,
    },

    instructions: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default RealList;
