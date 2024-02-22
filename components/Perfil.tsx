import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../components/perfilStyles';
import InformacionPersonal from './InformacionPersonal';
import HistorialRetiros from './HistorialRetiros';
import EstadoDeCuenta from './EstadoDeCuenta'; // Importa el nuevo componente+
import ApuestasTotales from './ApuestasTotales';
import Referidos from './Referidos';

interface PerfilProps {
    nombreUsuario: string;
    steamId: string;
}

const Perfil: React.FC<PerfilProps> = ({ nombreUsuario, steamId }) => {
    const [mostrarInformacionPersonal, setMostrarInformacionPersonal] = useState(false);
    const [mostrarHistorialRetiros, setMostrarHistorialRetiros] = useState(false);
    const [mostrarEstadoDeCuenta, setMostrarEstadoDeCuenta] = useState(false); // Se mantiene el estado aquí
    const [mostrarApuestasTotales, setMostrarApuestasTotales] = useState(false);
    const [mostrarReferidos, setMostrarReferidos] = useState(false);

    // Referencias para los botones
    const informacionPersonalRef = useRef<ScrollView>(null);
    const historialRetirosRef = useRef<ScrollView>(null);
    const estadoDeCuentaRef = useRef<ScrollView>(null);
    const apuestasTotalesRef = useRef<ScrollView>(null);
    const referidosRef = useRef<ScrollView>(null);

    const scrollToRef = (ref: React.RefObject<ScrollView>) => {
        if (ref.current) {
            ref.current.scrollTo({ y: 0, animated: true });
        }
    };

    const toggleInformacionPersonal = () => {
        setMostrarInformacionPersonal(!mostrarInformacionPersonal);
        setMostrarHistorialRetiros(false);
        setMostrarEstadoDeCuenta(false);
        setMostrarApuestasTotales(false);
        setMostrarReferidos(false);
        scrollToRef(informacionPersonalRef);
    }

    const toggleHistorialRetiros = () => {
        setMostrarHistorialRetiros(!mostrarHistorialRetiros);
        setMostrarInformacionPersonal(false);
        setMostrarEstadoDeCuenta(false);
        setMostrarApuestasTotales(false);
        setMostrarReferidos(false);
        scrollToRef(historialRetirosRef);
    }

    const toggleEstadoDeCuenta = () => {
        setMostrarEstadoDeCuenta(!mostrarEstadoDeCuenta);
        setMostrarInformacionPersonal(false);
        setMostrarHistorialRetiros(false);
        setMostrarApuestasTotales(false);
        setMostrarReferidos(false);
        scrollToRef(estadoDeCuentaRef);
    }

    const toggleApuestasTotales = () => {
        setMostrarApuestasTotales(!mostrarApuestasTotales);
        setMostrarInformacionPersonal(false);
        setMostrarHistorialRetiros(false);
        setMostrarEstadoDeCuenta(false);
        setMostrarReferidos(false);
        scrollToRef(apuestasTotalesRef);
    }

    const toggleReferidos = () => {
        setMostrarReferidos(!mostrarReferidos);
        setMostrarInformacionPersonal(false);
        setMostrarHistorialRetiros(false);
        setMostrarEstadoDeCuenta(false);
        setMostrarApuestasTotales(false);
        scrollToRef(referidosRef);
    }

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={require('../images/zac.jpg')} // Ruta de la imagen
                />
            </View>

            <Text style={styles.subtitulo2}>Nombre del Usuario: {nombreUsuario}</Text>
            <Text style={styles.subtitulo2}>SteamID: {steamId}</Text>
            <Text style={styles.titulo}>Mi perfil</Text>

            <ScrollView ref={informacionPersonalRef}>
                <TouchableOpacity onPress={toggleInformacionPersonal} style={styles.section}>
                    <Text style={[styles.subtitulo, styles.subtituloButton]}>Información Personal</Text>
                </TouchableOpacity>
                {mostrarInformacionPersonal && <InformacionPersonal />}
            </ScrollView>

            <ScrollView ref={historialRetirosRef}>
                <TouchableOpacity onPress={toggleHistorialRetiros} style={styles.section}>
                    <Text style={[styles.subtitulo, styles.subtituloButton]}>Historial de Retiros</Text>
                </TouchableOpacity>
                {mostrarHistorialRetiros && <HistorialRetiros />}
            </ScrollView>

            <ScrollView ref={estadoDeCuentaRef}>
                <TouchableOpacity onPress={toggleEstadoDeCuenta} style={styles.section}>
                    <Text style={[styles.subtitulo, styles.subtituloButton]}>Estado de Cuenta</Text>
                </TouchableOpacity>
                {mostrarEstadoDeCuenta && <EstadoDeCuenta />}
            </ScrollView>

            <ScrollView ref={apuestasTotalesRef}>
                <TouchableOpacity onPress={toggleApuestasTotales} style={styles.section}>
                    <Text style={[styles.subtitulo, styles.subtituloButton]}>Apuestas Totales</Text>
                </TouchableOpacity>
                {mostrarApuestasTotales && <ApuestasTotales />}
            </ScrollView>

            <ScrollView ref={referidosRef}>
                <TouchableOpacity onPress={toggleReferidos} style={styles.section}>
                    <Text style={[styles.subtitulo, styles.subtituloButton]}>Referidos</Text>
                </TouchableOpacity>
                {mostrarReferidos && <Referidos />}
            </ScrollView>

        </View>
    );
};

export default Perfil;
