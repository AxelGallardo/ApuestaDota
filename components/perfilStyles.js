import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginBottom: 250,
        backgroundColor: '#121212', // Color de fondo oscuro para un estilo gamer
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50, // Esto hace que la imagen sea circular
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff', // Color de texto blanco para contraste
        marginBottom: 20,
        alignSelf: "center",
    },
    section: {
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black', // Color de texto blanco para contraste
        marginBottom: 10,
        alignSelf: "center",
    },
    subtituloButton: {
        backgroundColor: '#FFFF00', // Color verde claro
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 250,
        textAlign: 'center'
    },
    subtitulo2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff', // Color de texto blanco para contraste
        marginBottom: 10,
        alignSelf: "center",
    },
    formulario: {
        backgroundColor: '#121212', // Fondo oscuro
        padding: 20,
        borderRadius: 10, // Bordes redondeados
        borderColor: '#00ff00', // Borde neón
        borderWidth: 2,
        marginBottom:20,
        
    },
    label: {
        fontSize: 16,
        color: '#00ff00', // Color neón para el texto
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#222', // Fondo más claro para inputs
        color: '#fff', // Texto en blanco para mayor contraste
        borderRadius: 5, // Bordes redondeados para inputs
        borderWidth: 1,
        borderColor: '#00ff00', // Borde neón para inputs
        marginBottom: 10,
        paddingHorizontal: 10, // Padding horizontal para el texto dentro del input
        paddingVertical: 5, // Espacio vertical más cómodo
    },
    customButton: {
        backgroundColor: '#00ff00', // Botón neón
        borderRadius: 5, // Bordes redondeados para el botón
        padding: 10,
        marginBottom: 10, // Espacio entre botones
        alignItems: 'center', // Alinear texto del botón al centro
    },
    buttonText: {
        color: '#121212', // Texto oscuro para contraste con el botón neón
        fontWeight: 'bold',
    },

    // Nuevos estilos para el componente EstadoDeCuenta
    estadoDeCuentaContainer: {
        backgroundColor: '#121212', // Fondo oscuro
        padding: 20,
        borderRadius: 10, // Bordes redondeados
        borderColor: '#00ff00', // Borde neón
        borderWidth: 2,
        marginBottom: 20,
    },
    subtituloEstadoDeCuenta: {
        color: '#00ff00', // Color neón para el texto
        marginBottom: 10,
        alignSelf: "center",
    },
    movimientosContainer: {
        marginTop: 10,
    },
    movimiento: {
        color: '#ffffff', // Color de texto blanco para contraste
        fontSize: 16,
        marginBottom: 5,
    },
    placeholderTextColor: '#8CFA9D', // Esta es la nueva propiedad
});

export default styles;
