import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../components/RealListStyles';

interface SalaApuestas {
    id: number;
    numero: string;
    costoEntrada: number;
    ganancia: number;
    host: string;
    cantidadParticipantes: number;
}

const SalasApuestas: React.FC<{ salasApuestas: SalaApuestas[] }> = ({ salasApuestas }) => (
    <View style={styles.salaApuestasContainer}>
        <Text style={styles.salaApuestasTitle}>Salas de Apuestas</Text>
        {salasApuestas.map((sala, index) => (
            <TouchableOpacity key={sala.id} style={styles.salaApuestasItem}>
                <Text style={styles.salaApuestasItemTitle}>- {sala.numero}</Text>
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
);

export default SalasApuestas;
