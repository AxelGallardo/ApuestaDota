import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Ingresar = () => {
    const [isLoading, setIsLoading] = useState(false);

    const openAuthSession = async () => {
        try {
            setIsLoading(true);
            const redirectUrl = 'tuUrlDeRedireccion';
            const authUrl = `https://steamcommunity.com/openid/login?...&redirect_uri=${encodeURIComponent(redirectUrl)}`;
            // Intenta abrir el navegador in-app para la autenticación...
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };









    return (

        <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.title}>Iniciar sesión con Steam</Text>

            {/* Modificación para el botón con degradado */}
            <LinearGradient
                colors={['#00BBED', '#0072ff']} // Colores del degradado para el botón
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.loginButtonGradient}
            >
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={openAuthSession}
                    disabled={isLoading}
                    activeOpacity={0.8} // Ajusta este valor según prefieras
                >
                    <Text style={styles.buttonText}>
                        {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
            {/* Fin de la modificación para el botón con degradado */}

            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsTitle}>{"\n"}¿Cómo hacer que tu perfil de Steam público?</Text>
                <Text style={styles.instructionsText}>
                    {"\n"}Recuerda tener en cuenta estos pasos para que puedas acceder con tu cuenta de Steam:  {"\n"}
                </Text>
                <Text style={styles.instructionsList}>

                    - Abrir Steam{"\n"}
                    - Ve a tu página de perfil{"\n"}
                    - Haga clic en "Editar perfil"{"\n"}
                    - Haga clic en "Mi configuración de privacidad"{"\n"}
                    - Establezca "Estado del perfil" en "Público"{"\n"}
                    - Guardar cambios{"\n"}
                </Text>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: "#Cfffff", // Verde eléctrico
    },
    instructionsContainer: {
        backgroundColor: '#121212', // Fondo oscuro
        padding: 20,
        borderRadius: 10, // Bordes redondeados
        borderColor: '#00ff00', // Borde neón
        borderWidth: 2,
        marginBottom: 200,
    },
    instructionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#E6E6E6", // Verde eléctrico
    },
    instructionsText: {
        fontSize: 16,
        marginBottom: 5,
        color: "white",
    },
    instructionsList: {
        fontSize: 16,
        color: "white",
    },
    loginButtonGradient: {
        borderRadius: 2,
        marginBottom: 30,
        width: 220,
    },
    loginButton: {
        padding: 10,
        borderRadius: 5,
        width: '100%', // Asegura que el TouchableOpacity llene el gradiente
        alignItems: 'center', // Centra el texto dentro del TouchableOpacity
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'normal',
    },
});

export default Ingresar;
