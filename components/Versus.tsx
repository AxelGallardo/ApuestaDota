import React, { useState } from 'react';
import {
    View,
    Text, // Importa el componente Text
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { styles } from '../components/RealListStyles';
import { Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { buttonStyles } from '../components/ButtonStyles';
import SalasApuestas from '../components/SalasApuestas';
import MiSala from '../components/MiSala';
import CrearSala from '../components/CrearSala';

interface Props { }

interface SalaApuestas {
    id: number;
    numero: string;
    costoEntrada: number;
    ganancia: number;
    host: string;
    cantidadParticipantes: number;
}

const Versus: React.FC<Props> = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [saldoDisponible, setSaldoDisponible] = useState<number>(100);
    const [selectedComponent, setSelectedComponent] = useState<'SalasApuestas' | 'MiSala' | 'CrearSala'>('SalasApuestas');

    const toggleCheckbox = (index: number): void => {
        setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const openWhatsApp = () => {
        let url = 'whatsapp://send?text=Hola&phone=51923298322';
        Linking.openURL(url).catch(err => console.error('Error al abrir WhatsApp', err));
    };

    const showSalasApuestas = () => {
        setSelectedComponent('SalasApuestas');
    };

    const salasApuestas: SalaApuestas[] = [
        { id: 1, numero: 'Sala 1', costoEntrada: 11.00, ganancia: 20.00, host: 'Juan', cantidadParticipantes: 5 },
        { id: 2, numero: 'Sala 2', costoEntrada: 4.40, ganancia: 8.00, host: 'Pedro', cantidadParticipantes: 8 },
        { id: 3, numero: 'Sala 3', costoEntrada: 22.00, ganancia: 40.00, host: 'María', cantidadParticipantes: 3 },
    ];

    return (
        <LinearGradient colors={['#0A1D21', '#19BF32', '#0A1D21']} style={styles.container}>
            <View style={styles.outerContainer}>
                <ScrollView style={styles.container}>
                    <View style={[styles.buttonContainer, { marginBottom: 20 }]}>
                        <TouchableOpacity
                            style={[buttonStyles.button, selectedComponent === 'SalasApuestas' ? buttonStyles.selectedButton : {},]}
                            onPress={() => setSelectedComponent('SalasApuestas')}
                        >
                            <Text
                                style={[buttonStyles.buttonText, selectedComponent === 'SalasApuestas' ? styles.selectedButtonText : {}]}
                            >
                                SALAS
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[buttonStyles.button, selectedComponent === 'MiSala' ? buttonStyles.selectedButton : {},]}
                            onPress={() => setSelectedComponent('MiSala')}
                        >
                            <Text
                                style={[buttonStyles.buttonText, selectedComponent === 'MiSala' ? styles.selectedButtonText : {}]}
                            >
                                MI SALA
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[buttonStyles.button, selectedComponent === 'CrearSala' ? buttonStyles.selectedButton : {},]}
                            onPress={() => setSelectedComponent('CrearSala')}
                        >
                            <Text
                                style={[buttonStyles.buttonText, selectedComponent === 'CrearSala' ? styles.selectedButtonText : {}]}
                            >
                                CREAR SALA
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.saldoDisponibleContainer}>
                        <Image source={require('../images/recargar.png')} style={styles.recargarIcon} />
                        <Text style={styles.saldoDisponibleText}>Saldo disponible: S/. {saldoDisponible.toFixed(2)}</Text>
                    </View>
                    {selectedComponent === 'SalasApuestas' && <SalasApuestas salasApuestas={salasApuestas} />}
                    {/* Se pasa la función showSalasApuestas como prop a MiSala */}
                    {selectedComponent === 'MiSala' && <MiSala onLeave={showSalasApuestas} />}
                    {selectedComponent === 'CrearSala' && <CrearSala />}
                </ScrollView>
                <TouchableOpacity onPress={openWhatsApp} style={styles.whatsAppIconContainer}>
                    <Image source={require('../images/whatsapp.png')} style={styles.whatsAppIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={openWhatsApp} style={styles.chatIconContainer}>
                    <Image source={require('../images/chat.png')} style={styles.chatIcon} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default Versus;
