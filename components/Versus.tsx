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
    nombre: string;
    descripcion: string;
    cuota: number;
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
        { id: 1, nombre: 'Sala 1', descripcion: 'Descripción de la sala 1', cuota: 2.0 },
        { id: 2, nombre: 'Sala 2', descripcion: 'Descripción de la sala 2', cuota: 1.5 },
        // Agrega más salas si es necesario
    ];

    return (
        <LinearGradient
            colors={['#0A1D21', '#61FF79', '#0A1D21']}
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
                                    <Text style={styles.salaApuestasItemTitle}>{sala.nombre}</Text>
                                    <Text style={styles.salaApuestasItemDescription}>{sala.descripcion}</Text>
                                    <Text style={styles.salaApuestasItemCuota}>Cuota: x{sala.cuota}</Text>
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
