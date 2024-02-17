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
import Carousel from 'react-native-snap-carousel';
import { Square } from '../components/Square';

interface Props { }

const RealList: React.FC<Props> = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [saldoDisponible, setSaldoDisponible] = useState<number>(100);

    const handleInputChange = (text: string): void => {
        const regex: RegExp = /^[0-9]*(\.[0-9]{0,2})?$/;
        if (text === '' || (regex.test(text) && parseFloat(text) <= 50)) {
            setSearchText(text);
        }
    };

    const toggleCheckbox = (index: number): void => {
        setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const squares: Square[] = [
        {
            title: 'Ganar la siguiente partida clasificatoria',
            subtitle: 'Juega con tu héroe favorito',
            cuota: '1.40',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 1.4).toFixed(2) : '...',
            image: require('../images/ganarsiguiente.png'),
        },
        {
            title: 'Ganar con 0 muertes',
            subtitle: 'Juega con tu héroe favorito pero no mueras',
            cuota: '2.50',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 2.5).toFixed(2) : '...',
            image: require('../images/ganar2.png'),
        },
        {
            title: 'Desafío Support',
            subtitle: 'Ganar con Crystal Maiden, Disruptor, Io, Oracle o Enigma',
            cuota: '1.42',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 1.42).toFixed(2) : '...',
            image: require('../images/ganar3.png'),
        },
        {
            title: 'Desafío Tanque',
            subtitle: 'Ganar con Pudge, Tiny, Treant Timbersaw o Beastmaster',
            cuota: '1.42',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 1.42).toFixed(2) : '...',
            image: require('../images/ganar4.png'),
        },
    ];

    const renderSquare = ({ item, index }: { item: Square; index: number }): JSX.Element => (
        <View style={styles.square}>
            <TouchableOpacity onPress={() => toggleCheckbox(index)} style={[styles.checkbox, selectedIndex === index && styles.checked]}>
                <Image source={item.image} style={styles.checkboxImage} />
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
                    <Image source={require('../images/moneda.png')} style={styles.searchIcon} />
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
                <View style={styles.saldoDisponibleContainer}>
                    <Image source={require('../images/recargar.png')} style={styles.recargarIcon} />
                    <Text style={styles.saldoDisponibleText}>
                        Saldo disponible: S/. {saldoDisponible.toFixed(2)}
                    </Text>
                </View>
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
                <TouchableOpacity onPress={() => console.log("Apostar")} style={styles.button}>
                    <Text style={styles.buttonText}>Apostar</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.apuestasRealizadas}>
                <Text style={styles.apuestasRealizadasTitle}>APUESTAS REALIZADAS</Text>


            </View>

            <View style={styles.apuestasRealizadas}>
                <Text style={styles.apuestasRealizadasTitle}>APUESTAS DE LA COMUNIDAD</Text>


            </View>


            <View style={styles.rectangle}>
                <Text style={styles.rectangleTitle}>REGLAS DEL JUEGO{'\n'}</Text>
                <Text style={styles.rectangleSubtitle}>ANTES DE APOSTAR:</Text>
                <Text style={styles.rectangleText}>

                    Recuerda, poner primero la apuesta y después buscar la partida clasificatoria.{'\n'}{'\n'}

                    No se tolerará cuentas <Text style={styles.greenTextReglas}>“smurf”</Text> o <Text style={styles.greenTextReglas}>“boosters”</Text> en el juego, evita que tu cuenta sea deshabilitada para siempre y juega con tu cuenta y medalla real.{'\n'}{'\n'}

                    Las partidas de ranked grupal <Text style={styles.greenTextReglas}>NO</Text> están permitidas, si lo haces tu partida será identificada y serás penalizado.{'\n'}{'\n'}

                    Una vez ejecutada la apuesta tienes <Text style={styles.greenTextReglas}>25 minutos para empezar a jugar </Text>en modo clasificatoria.{'\n'}{'\n'}

                    No está permitido utilizar cuentas secundarias para ingresar a partidas repletas de novatos abusando de jugadores que recién empiezan. {'\n'}{'\n'}
                </Text>
                <Text style={styles.rectangleSubtitle}>APUESTA POR MEDALLA:</Text>
                <Text style={styles.rectangleText}>Hasta Guardián, monto máximo de apuesta es de 10 soles.
                    {'\n'}{'\n'}Desde Cruzado, monto máximo de apuesta es de 50 soles.{'\n'}{'\n'}
                </Text>
            </View>

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
        marginTop: 10,
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
        alignSelf: 'center',
        width: '80%',
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
    instructions: {
        color: 'white',
        marginTop: 10,
        marginBottom: 50,
        textAlign: 'center',
    },
    saldoDisponibleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#292948',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
        marginLeft: 10,
        height: 50,
        borderColor: '#B6FF40',
        borderWidth: 1,
        alignSelf: 'center',
        width: '80%',
    },

    recargarIcon: {
        width: 20, // Ajusta estos valores según el tamaño deseado del ícono
        height: 20, // Ajusta estos valores según el tamaño deseado del ícono
        marginRight: 10, // Espacio entre el ícono y el texto
    },

    saldoDisponibleText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    square: {
        backgroundColor: '#1F1F37',
        borderRadius: 20,
        borderColor: '#1F1F37',
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 40,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: 320,
        height: 180,
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
        height: 180,
        marginRight: -500,
    },
    checked: {
        backgroundColor: '#B6FF40',
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
    buttonContainer: {
        marginBottom: 60,
        marginTop: 50,
        alignItems: 'center',
        width: '100%',
    },
    button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#B6FF40',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },

    apuestasRealizadas: {
        marginTop: 30, // Espaciado añadido para separar el rectángulo del botón
        marginBottom: 30,
        width: 320,
        minHeight: 50, // Cambiado a minHeight para que el contenedor se expanda verticalmente si es necesario
        backgroundColor: '#1C1C38', // Color negro
        alignSelf: 'center', // Centra horizontalmente
        borderRadius: 15,
        borderColor: '#B6FF40',
        borderWidth: 2,
        justifyContent: 'center', // Centra verticalmente
    },

    apuestasRealizadasTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },




    rectangle: {
        marginTop: 30, // Espaciado añadido para separar el rectángulo del botón
        marginBottom: 30,
        width: 350,
        height: 500,
        backgroundColor: '#1C1C38', // Color negro
        alignSelf: 'center', // Centra horizontalmente
        borderRadius: 15,
    },

    rectangleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
    rectangleSubtitle: {
        fontSize: 14,
        color: '#B6FF40',
        textAlign: 'center',
        marginTop: 10,
    },

    rectangleText: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        padding: 10,
        textAlign: 'justify', // Justificar el texto
    },

    greenTextReglas: {
        color: '#B6FF39',
        fontWeight: 'bold',
        fontSize: 12,
    },


});

export default RealList;
