import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';
import { styles } from '../components/RealListStyles';
import { Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { buttonStyles } from '../components/ButtonStyles';

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

    const toggleCheckbox = (index: number): void => {
        setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const openWhatsApp = () => {
        let url = 'whatsapp://send?text=Hola&phone=51923298322';
        Linking.openURL(url).catch(err => console.error('Error al abrir WhatsApp', err));
    };

    const salasApuestas: SalaApuestas[] = [
        { id: 1, numero: 'Sala 1', costoEntrada: 10.0, ganancia: 20.0, host: 'Juan', cantidadParticipantes: 5 },
        { id: 2, numero: 'Sala 2', costoEntrada: 15.0, ganancia: 25.0, host: 'Pedro', cantidadParticipantes: 8 },
        { id: 3, numero: 'Sala 3', costoEntrada: 20.0, ganancia: 30.0, host: 'María', cantidadParticipantes: 3 },
        // Agrega más salas si es necesario
    ];

    return (
        <LinearGradient
            colors={['#0A1D21', '#19BF32', '#0A1D21']}
            style={styles.container}>
            <View style={styles.outerContainer}>
                <ScrollView style={styles.container}>
                    <View style={[styles.buttonContainer, { marginBottom: 20 }]}>
                        <TouchableOpacity style={buttonStyles.button}>
                            <Text style={buttonStyles.buttonText}>Salas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[buttonStyles.button, { marginTop: 10 }]}>
                            <Text style={buttonStyles.buttonText}>Mi Sala</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[buttonStyles.button, { marginTop: 10 }]}>
                            <Text style={buttonStyles.buttonText}>Crear Sala</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.saldoDisponibleContainer}>
                        <Image source={require('../images/recargar.png')} style={styles.recargarIcon} />
                        <Text style={styles.saldoDisponibleText}>
                            Saldo disponible: S/. {saldoDisponible.toFixed(2)}
                        </Text>
                    </View>
                    {salasApuestas.length > 0 && (
                        <View style={styles.salaApuestasContainer}>
                            <Text style={styles.salaApuestasTitle}>Salas de Apuestas</Text>
                            {salasApuestas.map((sala, index) => (
                                <TouchableOpacity key={sala.id} style={styles.salaApuestasItem}>
                                    <Text style={styles.salaApuestasItemTitle}>Número de Sala: {sala.numero}</Text>
                                    <Text style={styles.salaApuestasItemDescription}>Costo de Entrada: S/. {sala.costoEntrada}</Text>
                                    <Text style={styles.salaApuestasItemDescription}>Ganancia: S/. {sala.ganancia}</Text>
                                    <Text style={styles.salaApuestasItemDescription}>Nombre del Host: {sala.host}</Text>
                                    <Text style={styles.salaApuestasItemDescription}>Cantidad de Participantes: {sala.cantidadParticipantes}</Text>
                                    <TouchableOpacity style={styles.unirseButton}>
                                        <Text style={styles.unirseButtonText}>Unirse</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </ScrollView>
                <TouchableOpacity onPress={openWhatsApp} style={styles.whatsAppIconContainer}>
                    <Image
                        source={require('../images/whatsapp.png')}
                        style={styles.whatsAppIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={openWhatsApp} style={styles.chatIconContainer}>
                    <Image
                        source={require('../images/chat.png')}
                        style={styles.chatIcon}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default Versus;
