import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from '../components/RealListStyles';

// Simulación del componente Square (ajusta según tu implementación)
interface Square {
    title: string;
    subtitle: string;
    cuota: string;
    recompensa: string;
    image: NodeRequire; // Para imágenes estáticas importadas
}

const squares: Square[] = [
    {
        title: 'Ganar la siguiente partida clasificatoria',
        subtitle: 'Juega con tu héroe favorito',
        cuota: '1.40',
        recompensa: '...',
        image: require('../images/ganarsiguiente.png'), // Asegúrate de que las rutas de las imágenes sean correctas
    },
    {
        title: 'Ganar con 0 muertes',
        subtitle: 'Juega con tu héroe favorito pero no mueras',
        cuota: '2.50',
        recompensa: '...',
        image: require('../images/ganar2.png'),
    },
    {
        title: 'Desafío Support',
        subtitle: 'Ganar con Crystal Maiden, Disruptor, Io, Oracle o Enigma',
        cuota: '1.42',
        recompensa: '...',
        image: require('../images/ganar3.png'),
    },
    {
        title: 'Desafío Tanque',
        subtitle: 'Ganar con Pudge, Tiny, Treant Timbersaw o Beastmaster',
        cuota: '1.42',
        recompensa: '...',
        image: require('../images/ganar4.png'),
    },
];

const RealList: React.FC = () => {
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
        setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const renderSquare = ({ item, index }: { item: Square; index: number }): JSX.Element => (
        <View style={styles.square}>
            <TouchableOpacity onPress={() => toggleCheckbox(index)} style={[styles.checkbox, selectedIndex === index && styles.checked]}>
                <Image source={item.image} style={styles.checkboxImage} />
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
                <Text style={styles.boldText}>{item.title}</Text>{'\n\n'}
                {item.subtitle && <Text style={styles.describirText}>{item.subtitle}</Text>}
                {'\n\n'}
                <Text style={styles.yellowText}>Cuota:</Text>
                <Text style={styles.greenText}> x {item.cuota}</Text>
                {'\n'}Recompensa: {item.recompensa}
            </Text>
        </View>
    );

    return (

        <View style={styles.outerContainer}>
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
            <Image
                source={require('../images/whatsapp.png')} // Asegúrate de cambiar la ruta a tu imagen
                style={styles.fixedImage}
            />
        </View>


    );
};



export default RealList;
