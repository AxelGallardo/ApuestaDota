import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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


    const toggleInformacionPersonal = () => {
        setMostrarInformacionPersonal(!mostrarInformacionPersonal);
    }

    const toggleHistorialRetiros = () => {
        setMostrarHistorialRetiros(!mostrarHistorialRetiros);
    }

    const toggleEstadoDeCuenta = () => { // Función para cambiar el estado de mostrarEstadoDeCuenta
        setMostrarEstadoDeCuenta(!mostrarEstadoDeCuenta);
    }

    const toggleApuestasTotales = () => { // Función para cambiar el estado de mostrarEstadoDeCuenta
        setMostrarApuestasTotales(!mostrarApuestasTotales);
    }
    const toggleReferidos = () => { // Función para cambiar el estado de mostrarEstadoDeCuenta
        setMostrarReferidos(!mostrarReferidos);
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

            {/* Botón y componente de Información Personal */}
            <TouchableOpacity onPress={toggleInformacionPersonal} style={styles.section}>
                <Text style={[styles.subtitulo, styles.subtituloButton]}>Información Personal</Text>
            </TouchableOpacity>
            {mostrarInformacionPersonal && <InformacionPersonal />}

            {/* Botón y componente de Historial de Retiros */}
            <TouchableOpacity onPress={toggleHistorialRetiros} style={styles.section}>
                <Text style={[styles.subtitulo, styles.subtituloButton]}>Historial de Retiros</Text>
            </TouchableOpacity>
            {mostrarHistorialRetiros && <HistorialRetiros />}

            {/* Botón y componente de Estado de Cuenta */}
            <TouchableOpacity onPress={toggleEstadoDeCuenta} style={styles.section}>
                <Text style={[styles.subtitulo, styles.subtituloButton]}>Estado de Cuenta</Text>
            </TouchableOpacity>
            {mostrarEstadoDeCuenta && <EstadoDeCuenta />}

            {/* Botón y componente de Apuestas Totales */}
            <TouchableOpacity onPress={toggleApuestasTotales} style={styles.section}>
                <Text style={[styles.subtitulo, styles.subtituloButton]}>Apuestas Totales</Text>
            </TouchableOpacity>
            {mostrarApuestasTotales && <ApuestasTotales />}


            {/* Botón y componente de Referidos */}
            <TouchableOpacity onPress={toggleReferidos} style={styles.section}>
                <Text style={[styles.subtitulo, styles.subtituloButton]}>Referidos</Text>
            </TouchableOpacity>
            {mostrarReferidos && <Referidos />}


        </View>
    );
};

export default Perfil;
