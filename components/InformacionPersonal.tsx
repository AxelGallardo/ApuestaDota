import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../components/perfilStyles';

const InformacionPersonal: React.FC = () => {
    return (
        <View style={styles.formulario}>
            <Text style={styles.label}>Hola dotero, completa tu información para verificar tu cuenta</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre (Escribe tu nombre)"
                placeholderTextColor={styles.placeholderTextColor}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellidos (Escribe tus apellidos)"
                placeholderTextColor={styles.placeholderTextColor}
            />
            <TextInput
                style={styles.input}
                placeholder="País (Seleccionar país)"
                placeholderTextColor={styles.placeholderTextColor}
            />
            <TextInput
                style={styles.input}
                placeholder="Número de celular (Ingresa tu número de celular)"
                keyboardType="numeric"
                placeholderTextColor={styles.placeholderTextColor}
            />
            <TextInput
                style={styles.input}
                placeholder="Número del Documento de Identidad"
                keyboardType="numeric"
                placeholderTextColor={styles.placeholderTextColor}
            />
            <TouchableOpacity style={styles.customButton}>
                <Text style={styles.buttonText}>Adjuntar imagen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customButton}>
                <Text style={styles.buttonText}>Registrar Información</Text>
            </TouchableOpacity>
        </View>
    );
};

export default InformacionPersonal;
