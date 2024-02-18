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
import { styles } from '../components/RealListStyles';
import { Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props { }

const Practica: React.FC<Props> = () => {
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
            subtitle: 'Juega con tus héroes favoritos',
            cuota: '1.40',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 1.4).toFixed(2) : '...',
            image: require('../images/ganarsiguiente.png'),
        },
        {
            title: 'Ganar con 0 muertes',
            subtitle: 'Juega con tu héroe favorito pero \nno mueras',
            cuota: '2.50',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 2.5).toFixed(2) : '...',
            image: require('../images/ganar2.png'),
        },
        {
            title: 'Desafío Support',
            subtitle: 'Ganar con Crystal Maiden, \nDisruptor, Io, Oracle o Enigma',
            cuota: '1.42',
            recompensa: searchText !== '' ? (parseFloat(searchText) * 1.42).toFixed(2) : '...',
            image: require('../images/ganar3.png'),
        },
        {
            title: 'Desafío Tanque',
            subtitle: 'Ganar con Pudge, Tiny, Treant P.\nTimbersaw o Beastmaster',
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
                {'\n'}Recompensa: S/ {item.recompensa}
            </Text>
        </View>
    );


    const openWhatsApp = () => {
        let url = 'whatsapp://send?text=Hola&phone=51923298322'; // Asegúrate de usar el número correcto aquí
        Linking.openURL(url).catch(err => console.error('Error al abrir WhatsApp', err));
    };

    return (
        <LinearGradient
            colors={['#061212', '#FF6633', '#061212']}
            style={styles.container}>


            <View style={styles.outerContainerPractica}>
                <ScrollView style={styles.containerPractica}>
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
                <TouchableOpacity onPress={openWhatsApp} style={styles.whatsAppIconContainer}>
                    <Image
                        source={require('../images/whatsapp.png')} // Asegúrate de que la ruta a la imagen es correcta
                        style={styles.whatsAppIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={openWhatsApp} style={styles.chatIconContainer}>
                    <Image
                        source={require('../images/chat.png')} // Asegúrate de que la ruta a la imagen es correcta
                        style={styles.chatIcon}
                    />
                </TouchableOpacity>


            </View>

        </LinearGradient>
    );
};




export default Practica;
