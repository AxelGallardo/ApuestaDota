import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Carousel, { CarouselProps } from 'react-native-snap-carousel';
import { Square } from '../components/Square';

interface Props { }

const RealList: React.FC<Props> = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleInputChange = (text: string): void => {
        const regex: RegExp = /^[0-9]*(\.[0-9]{0,2})?$/;
        if (text === '' || (regex.test(text) && parseFloat(text) <= 50)) {
            setSearchText(text);
        }
    };

    const toggleCheckbox = (index: number): void => {
        setSelectedIndex(prevIndex => prevIndex === index ? null : index);
    };

    const squares: Square[] = [
        {
            title: 'Ganar la siguiente partida clasificatoria',
            subtitle: 'Juega con tu héroe favorito',
            cuota: '1.40',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 1.4).toFixed(2) : '...',
            image: require('../images/ganarsiguiente.png')
        },
        {
            title: 'Ganar con 0 muertes',
            subtitle: 'Juega con tu héroe favorito \npero no mueras',
            cuota: '2.50',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 2.5).toFixed(2) : '...',
            image: require('../images/ganar2.png')
        },
        {
            title: 'Desafío Support',
            subtitle: 'Ganar con Crystal Maiden, \nDisruptor, Io, Oracle o Enigma',
            cuota: '1.42',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 1.42).toFixed(2) : '...',
            image: require('../images/ganar3.png')
        },
        {
            title: 'Desafío Tanque',
            subtitle: 'Ganar con Pudge, Tiny, Treant P.\nTimbersaw o Beastmaster',
            cuota: '1.42',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 1.42).toFixed(2) : '...',
            image: require('../images/ganar4.png')
        },
    ];

    const renderSquare = ({ item, index }: { item: Square; index: number }): JSX.Element => (
        <View style={styles.square}>
            <TouchableOpacity onPress={() => toggleCheckbox(index)} style={[styles.checkbox, selectedIndex === index && styles.checked]}>
                <Image
                    source={item.image}
                    style={styles.checkboxImage}
                />
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
                <Text style={styles.boldText}>{item.title}</Text>{'\n\n'}
                {item.subtitle ? <Text style={styles.describirText}>{item.subtitle}</Text> : null}
                {'\n\n'}
                <Text style={styles.yellowText}>Cuota:</Text>
                <Text style={styles.greenText}> x {item.cuota}</Text>
                {'\n'}Recompensa: {item.recompensa}
            </Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
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
                        keyboardType="numeric"
                    />
                </View>
                <Text style={styles.instructions}>
                    El monto de apuesta es de 1 a 50 soles
                </Text>
            </View>

            <Carousel
                data={squares}
                renderItem={renderSquare}
                sliderWidth={400}
                itemWidth={320}
                layout="default"
                loop={true}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => console.log("Apostar")} style={[styles.button, { backgroundColor: '#B6FF40' }]}>
                    <Text style={styles.buttonText}>Apostar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rectangle} />
        </ScrollView>
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
        backgroundColor: '#1F1F37',
        borderRadius: 20,
        borderColor: '#1F1F37',
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 40,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: 320,
        height: 160,
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
        marginRight: 10,
    },
    checkboxImage: {
        width: 60,
        height: 160,
        marginRight: -500,
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
        flexShrink: 1,
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
    buttonContainer: {
        marginBottom: 12,
        alignItems: 'center', // Centra el botón horizontalmente
        width: '100%', // Ajusta el ancho del contenedor del botón
        color: 'black', // Define el color del texto como negro
    },
    apostarButton: {
        color: 'black', // Define el color del texto como negro
    },
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'black', // Color del texto
        fontSize: 18,
        fontWeight: 'bold',
    },
    rectangle: {
        marginTop: 30, // Espaciado añadido para separar el rectángulo del botón
        width: 300,
        height: 350,
        backgroundColor: 'black', // Color negro
        alignSelf: 'center', // Centra horizontalmente
    },
});

export default RealList;
