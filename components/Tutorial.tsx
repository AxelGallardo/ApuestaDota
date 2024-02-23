import React from 'react';
import { View, Text } from 'react-native';

const Tutorial = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Preguntas Frecuentes</Text>

            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Cómo puedo retirar mis ganancias?</Text>
                <Text style={styles.subtitulo2}>
                    Ir a la sección de Retiro en la parte izquierda de la pantalla, llenar los datos del formulario e indicar el monto a retirar, este retiro solo puede realizarse a las cuentas bancarias del titular registrado en apuestadota.com, no está permitido transferir a cuentas bancarias de terceras personas.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Puedo tener más de una cuenta?</Text>
                <Text style={styles.subtitulo2}>
                    No, cada cuenta está registrada con un documento de identidad, solo está permitido usar una cuenta por persona para evitar el abuso de emparejamiento desleal.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Por qué necesito verificar mi cuenta?</Text>
                <Text style={styles.subtitulo2}>
                    Para poder retirar el dinero es necesario identificar completamente al receptor, por ello necesitamos que subas al servidor tu documento de identidad correspondiente a tu país, el cual será corroborado al momento en que solicites retirar tus fondos.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Puedo realizar el depósito de saldo desde una cuenta bancaria que no me pertenece?</Text>
                <Text style={styles.subtitulo2}>
                    No, el depósito ya sea por cualquier método de pago (Yape, Plin, Visa, etc.), debe ser desde una cuenta que pertenezca al titular de Apuestadota.com.
                </Text>
            </View>




            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Puedo jugar reemplazando a otra persona?</Text>
                <Text style={styles.subtitulo2}>
                    No, hacerlo conllevará a la deshabilitación permanente de la cuenta, tampoco está permitido el intercambio de cuentas, ni registrarse usando el documento de identidad de otra persona ni otro tipo de acciónes fraudulentas.
                </Text>
            </View>





            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Qué pasa si cuando estoy esperando a que la partida inicie, algún jugador tiene un error de conexión y la partida no empieza?</Text>
                <Text style={styles.subtitulo2}>
                    En ese caso tu siguiente partida será la que va a contar, no te preocupes.
                </Text>
            </View>






            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Qué documentos puedo utilizar para verificar mi cuenta?</Text>
                <Text style={styles.subtitulo2}>
                    Debes subir tu documento de identificacin legal exigible según tu país, por ejemplo pero no limitando a: Cédula de identidad, Documento nacional de identidad, Cédula de ciudadanía, Carnet de Identidad, Clave única de registro de población, Documento Personal de Identificación, Documento único de identidad, Identificación, entre otros determinados según su nacionalidad.
                </Text>
            </View>




            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Hay un monto de depósito mínimo para abrir mi cuenta?</Text>
                <Text style={styles.subtitulo2}>
                    Puedes abrir tu cuenta sin necesidad de depositar pero si necesitarás hacer un depósito para poder apostar.
                </Text>
            </View>




            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Hay un monto mínimo de depósito?</Text>
                <Text style={styles.subtitulo2}>
                    Puedes depositar desde S/ 10.00.
                </Text>
            </View>




            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Hay un monto máximo de depósito?</Text>
                <Text style={styles.subtitulo2}>
                    Puedes depositar hasta S/ 500.00 por vez.
                </Text>
            </View>






            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Cuál es el monto mínimo y máximo para realizar una apuesta?</Text>
                <Text style={styles.subtitulo2}>
                    El monto mínimo de apuesta es S/ 1.00 y el máximo se indica en la página principal.
                </Text>
            </View>





            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Qué pasa si dejo de compartir mi información pública de Dota 2 en medio de una partida?</Text>
                <Text style={styles.subtitulo2}>
                    Se terminará la apuesta dando como resultado la pérdida de fondos, esta acción es considerada como intento de fraude.
                </Text>
            </View>




            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Qué pasa si cometo acciones fraudulentas?</Text>
                <Text style={styles.subtitulo2}>
                    Tu apuesta en curso ser considerada en pérdida, el saldo de tu cuenta será reembolsado a tu cuenta bancaria, se bloqueará tu cuenta registrada en apuestadota.com y el documento de identificación registrado. Quedarás betado para siempre del uso de esta plataforma y de las siguientes que formen parte del grupo empresarial.
                </Text>
            </View>



            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Qué pasa si empiezo una apuesta y tarda más de 25 minutos en comenzar la partida?</Text>
                <Text style={styles.subtitulo2}>
                    Si la partida tarda más de 25 minutos en comenzar de forma automática se considerará como pérdida, se investigará si en ese tiempo no haz dejado de compartir tus estadísticas o haz intentado realizar alguna acción fraudulenta. Si no ha habido alguna irregularidad y te sucede esto puedes comunicarte a soporte@apuestadota.com y nos pondremos en contacto con usted para solicitarle evidencias de lo ocurrido.
                </Text>
            </View>



            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Qué pasa si cuando estoy esperando a que la partida inicie, algún jugador tiene un error de conexión y la partida no empieza?</Text>
                <Text style={styles.subtitulo2}>
                    En ese caso tu siguiente partida será la que va a contar, no te preocupes.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitulo}>¿Existe un monto mínimo y máximo de retiro?</Text>
                <Text style={styles.subtitulo2}>
                    El monto mínimo de retiro es de 20 soles pero no existe monto máximo de retiro, puedes retirar la totalidad de tu saldo siempre y cuando este sea mayor a 20 soles.
                </Text>
            </View>










        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        padding: 20,
        marginBottom: 250,
        backgroundColor: '#121212',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
        alignSelf: "center",
    },
    section: {
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00ff00',
        marginBottom: 10,
        alignSelf: "center",
    },
    subtitulo2: {
        fontSize: 18,
        color: '#ffffff',
        marginBottom: 10,
        alignSelf: "center",
    },
};

export default Tutorial;
