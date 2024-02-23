import React, { useRef } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const Terminos = () => {
    const scrollViewRef = useRef(null); // Inicializar la referencia al ScrollView

    const handleScrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    return (
        <ScrollView style={styles.container} ref={scrollViewRef}>
            <Text style={styles.title}>Términos y Condiciones</Text>
            <Text style={styles.text}>
                Este contrato se celebra, por y en virtud de estos términos y condiciones, en adelante denominado, el contrato; los
                cuales, regularán la relación entre APUESTADOTA.COM, sistema el cual en adelante será denominado, la compañía;
                y el usuario (ya sea una persona natural o jurídica) en adelante denominado el cliente de www.apuestadota.com,
                en adelante denominado, el sitio web.
                1. El Cliente confirma haber leído, comprendido y aceptado toda la información, las condiciones y los
                términos establecidos en el sitio web, que incluyen información legal importante, y que están disponibles para su
                revisión y estudio por parte del público.
                2. Al aceptar este contrato, el cliente acuerda y acepta, de manera irrevocable, los términos y condiciones
                contenidos en el mismo, en sus anexos o apéndices y en cualesquiera otra documentación o información, que haya
                sido publicada en el sitio web, lo cual incluye, entre otros aspectos: la Política de Privacidad, la Política de Pago, la
                Política de Retiradas, el Código de Conducta y la Política contra el Lavado de Dinero. El Cliente acepta este Contrato
                a través del registro de una Cuenta en el sitio web y del depósito de los fondos. Al aceptar el Acuerdo, el cual está
                sometido a la aprobación final por parte de la Compañía, el Cliente celebra un acuerdo legal y vinculante con la
                Compañía.
                3. Los términos de este Contrato se considerarán como aceptados incondicionalmente por parte del Cliente
                cuando la Compañía reciba un pago anticipado hecho por el Cliente. Tan pronto como la Compañía reciba el anticipo
                del Cliente, todas las operaciones realizadas por el Cliente en la plataforma estarán sujetas a los términos del
                presente Acuerdo y demás documentación e información en el Sitio Web.
                4. Mediante el presente contrato, el Cliente reconoce que cada transacción, apuesta y/o comunicación que
                haya sido realizada por este en la Plataforma de Apuestas, lo cual incluye, entre otros aspectos, las actividades que
                se hayan realizado a través de su Cuenta y del Sitio web, se regirán y/o se deberán llevar a cabo de conformidad con
                los términos y condiciones de este Acuerdo, así como de cualquier otra documentación/información que esté
                presente en el sitio web.
                5. Al aceptar este contrato, el Cliente confirma que puede recibir información, incluyendo modificaciones al
                presente Contrato, por correo electrónico, WhatsApp o a través del sitio web.
                1. Objeto del contrato y de los servicios prestados
                1. El objeto del Contrato será la prestación de Servicios al Cliente, por parte de la Compañía, en virtud del
                Contrato y a través de la Plataforma de Apuestas.
                2. La Compañía llevará a cabo todas las transacciones según lo dispuesto en este Acuerdo, solo en base a los
                resultados, sin administrar la cuenta ni asesorar al Cliente. La Compañía tiene derecho a ejecutar las transacciones
                solicitadas por el Cliente según lo dispuesto en este Acuerdo, incluso si la transacción no resulta beneficiosa para el
                Cliente.
                2. Disposiciones generales
                1. Sometido a las disposiciones de este Acuerdo, la Compañía acepta proporcionar al Cliente los Servicios
                sujetos al mismo:
                a. Siendo mayor de edad, según la jurisdicción donde resida o en la que sea residente; teniendo
                competencia legal y estando en pleno uso de sus facultades mentales.
                b. No siendo residente en cualquier país donde la distribución o prestación de los productos o
                servicios ofrecidos por la Compañía infrinja las leyes o regulaciones locales. Es responsabilidad del cliente
                cerciorarse de los términos y de cumplir con cualesquiera de las leyes o regulaciones locales de la que sea
                objeto.
                2. La Compañía ofrecerá Servicios al Cliente, bajo su absoluta discreción, en virtud de las disposiciones de
                este Contrato.
                3. El Cliente tiene prohibido y, bajo ninguna circunstancia, podrá ejecutar cualquier transacción en la
                Plataforma de Inversión, el Sitio Web y/o a través de su Cuenta, que como resultado excediese el saldo total y/o la
                cantidad de dinero depositado/mantenido en su Cuenta. Estas cantidades depositadas se considerarán entregadas
                como colateral, ya sea en forma de gravamen o de otra forma, a la Compañía por parte del Cliente, mediante lo cual
                la obligación del Cliente de pagar cualquier cantidad de dinero a la Compañía queda garantizada.
                4. La Compañía facilitará la ejecución de transacciones del Cliente, no obstante, mediante el presente
                contrato, el Cliente reconoce y acepta que la Compañía, en ningún momento, proporcionará ningún servicio de
                fideicomiso y/o de consultoría de apuestas ni servicios de asesoría al Cliente.
                5. La compañía procesará todas las transacciones del Cliente en virtud de los términos y condiciones de este
                contrato y solo en base a la ejecución. La Compañía no administrará la Cuenta del Cliente, ni le prestará asesoría de
                ninguna manera.
                6. La Compañía procesará las transacciones solicitadas por el Cliente en virtud de este Contrato,
                independientemente de si tales transacciones pudieren resultar que no fuesen beneficiosas para el Cliente. La
                Compañía, a menos que se acuerde lo contrario en este Contrato y/o en otra documentación/información en el sitio
                web.
                7. La Compañía no resultará financieramente responsable con respecto a ninguna transacción realizada por
                el Cliente a través de la Cuenta y/o en la Plataforma de Apuestas.
                8. Cada Cliente será el único usuario autorizado de los servicios de la Compañía y de la Cuenta
                correspondiente. Se le concede al Cliente un derecho exclusivo y no transferible para el uso y el acceso a la Cuenta
                y es su responsabilidad asegurarse de que ningún tercero, incluyendo, sin limitación, a cualquier pariente cercano
                y/o a los miembros de su familia inmediata, obtenga acceso y/o realice operaciones de inversión a través de la
                Cuenta que se le haya asignado.
                9. El Cliente será responsable de todas las transacciones haciendo uso de su información de seguridad, por
                lo que cualquier orden recibida por la Compañía de esta manera, se considerará que ha sido dada por el Cliente.
                Siempre que cualquier transacción sea presentada a través de la Cuenta de un Cliente, la Compañía supondrá
                razonablemente que tales transacciones fueron presentadas por el Cliente, ante lo cual, la Compañía no tendrá
                ninguna obligación de investigar el asunto en mayor profundidad. La compañía no será responsable ni mantendrá
                ninguna relación legal con cualquier tercero que no sea el cliente.
                10. Si el Cliente actúa en el nombre de un tercero y/o en el nombre de una orden proveniente de cualquier
                tercero, la Compañía no aceptará a esta persona como Cliente y no será responsable ante esta persona,
                independiente de si tal persona estuviera identificada o no.
                11. El Cliente comprende y está de acuerdo en que la Compañía pueda, de vez en cuando y a su sola
                discreción, usar a un tercero para que mantenga los fondos del Cliente y/o a efectos de recibir los servicios de
                ejecución de pago. Estos fondos se mantendrán en cuentas segregadas de los fondos propios de dicho tercero y no
                afectarán los derechos del Cliente sobre tales fondos.
                12. La Compañía puede ofrecer chats internos, en directo, en los cuales los clientes pueden compartir, entre
                otras cosas, sus ideas y/o expresar sus opiniones en general. El cliente reconoce y acepta que, la función de chat en
                directo que proporciona la Compañía, no constituye ni constituirá una información válida y/o precisa y/o una
                información que sea dirigida hacia los clientes/clientes potenciales y/o que de ninguna forma consiste en una
                información que sea controlada por la Compañía y/o que tampoco supone un asesoramiento, ya que simplemente
                se trata de una característica que permite a los clientes, entre otras cosas y entre ellos mismos, expresar sus
                pensamientos e ideas.
                13. El cliente asumirá cualquier tipo de comisión bancaria o impuesto que derive del uso de los servicios
                ofrecidos por el sitio web, así como cualquier otro concepto no mencionado que pudiera afectar las transacciones
                de dinero ya sea depósitos o retiros.
                3. Ejecución de órdenes / apuestas electrónicas
                1. Al aceptar el presente acuerdo, el Cliente acepta haber leído y entendido todas las disposiciones del
                presente Acuerdo y la información pertinente en la Web.
                La recepción de la transacción, por parte la compañía, no constituirá su aceptación; ya que la aceptación solamente
                se constituirá en virtud de la ejecución de la apuesta por parte de la compañía.
                2. La Compañía estará obligada a ejecutar las apuestas del Cliente secuencial y puntualmente.
                3. El cliente reconoce y acepta
                a) el riesgo de errores o malentendidos en las transacciones enviadas a través de la plataforma de
                apuestas, debido a fallos técnicos o mecánicos de dichos medios electrónicos;
                b) el riesgo de cualquier retraso o de otros problemas; así como
                c) el riesgo de que las transacciones sean presentadas por personas no autorizadas para usar o
                acceder a la cuenta, por lo cual, el cliente, acepta indemnizar a la compañía plenamente en relación con
                cualquier pérdida en la que se incurra, como resultado de actuar en virtud de tales transacciones.
                4. El cliente reconoce y acepta que cualquier producto o servicio que pueda ofrecer la compañía, podría no
                estar siempre disponible para su compra o para su uso y que, por tanto, queda a la absoluta discreción de la
                compañía decidir, en cualquier momento, si pone a disposición de los clientes, o no, dichos productos. La Compañía
                no asumirá ninguna responsabilidad, ya sea monetaria o de otro tipo, en relación con esta sección, incluyéndose,
                sin limitación alguna, el hecho en determinados momentos, de no hacer disponible cualquier producto.
                5. El Cliente reconoce que la Compañía tendrá derecho, en cualquier momento y por cualquier razón y sin
                justificación, a su exclusivo criterio, de negarse a ejecutar transacciones, incluidas, entre otras, las siguientes
                circunstancias:
                a. Si la ejecución de la orden contribuye o podría contribuir a la legalización del producto de
                actividades ilegales (lavado de dinero);
                b. Si el Cliente no tiene fondos suficientes para cubrir la transacción.
                c. Si el Cliente no cumple con sus obligaciones ante la Compañía, en virtud de este Contrato;
                Cualquier negativa por parte de la Compañía no afectará ninguna obligación que el Cliente pueda tener ante la
                Compañía.
                4. Limitación de responsabilidad
                1. La Compañía no garantiza el servicio ininterrumpido, seguro y libre de errores, ni la inmunidad contra el
                acceso no autorizado a los servidores de los sitios web de apuesta, ni contra interrupciones causadas por daños, mal
                funcionamiento o fallos de hardware, software, comunicaciones o de sistemas en los equipos del Cliente y de los
                proveedores de la Compañía.
                2. La prestación de servicios por la Compañía depende, entre otras cosas, de terceros por lo que la Compañía
                no asumirá ninguna responsabilidad por cualquier acción u omisión de terceros y no se responsabilizará por ningún
                daño y/o pérdida y/o gastos causados al Cliente o a terceros como consecuencia de, y/o en relación con, las citadas
                acciones u omisiones.
                3. La Compañía no asumirá ninguna responsabilidad por ningún daño de cualquier tipo causado al Cliente
                en circunstancias de fuerza mayor o durante cualquier acontecimiento en el que la Compañía no tenga control y
                que haya impactado en la accesibilidad al sitio web de Inversión.
                4. Bajo ninguna circunstancia la Compañía correrá con la responsabilidad por los daños directos o indirectos
                de cualquier tipo, inclusive si la Compañía hubieren sido notificados de la posibilidad de dicho daño.
                5. Aceptación de apuestas
                1. La Compañía procederá a aceptar las apuestas en el momento de la ejecución de dichas apuestas.
                2. En todo momento, el Cliente tendrá acceso para su conocimiento al estado de su cuenta en línea en la
                Plataforma de Apuestas de la Compañía.
                6. Derechos, obligaciones y garantías de las partes
                1. El Cliente tendrá derecho a:
                a. Presentar ante la Compañía cualquier transacción que solicite la ejecución de una apuesta en el
                Sitio Web, en virtud de, y sometida a, los términos y condiciones de este Contrato;
                b. Solicitar la retirada de cualquier cantidad superior al monto mínimo de retiro, sometido a, y en
                virtud de, la Política de Retirada, siempre que la Compañía no tenga reclamaciones contra el Cliente y/o que
                el Cliente no tenga deudas pendientes con la Compañía;
                c. En caso de que el Cliente tenga cualquier presunta reclamación contra la Compañía y/o que exista
                cualquier disputa entre el Cliente y la Compañía, en dicho caso, el Cliente podrá presentar su reclamación
                ante la Compañía, incluyendo todos los detalles concretos y pertinentes, contactando a tales efectos con
                soporte@apuestadota.com. La Compañía reconocerá la recepción de tal reclamación, iniciará una
                investigación interna sobre el asunto y responderá al Cliente en un plazo razonable (por ejemplo, en un
                plazo no superior a 3 meses desde la fecha en que se reconozca la recepción de la reclamación). La Compañía
                podrá ampliar dicho plazo si así lo considera necesario y, en tal caso, notificará al Cliente según corresponda.
                d. Terminar unilateralmente el Contrato, siempre que no haya deudas pendientes del Cliente hacia
                la Compañía.
                2. El Cliente:
                a. Reconoce que la Cuenta se activará en el momento del depósito de los fondos en la Cuenta.
                b. Garantiza que deberá cumplir, en todo momento y de forma honrada, con todos los términos y
                condiciones de este contrato.
                c. Garantiza que se asegurará de que el nombre de usuario y la contraseña, emitidos por la Compañía
                en relación con el uso de los Servicios y de la Cuenta, en todo momento sean únicamente utilizados por el
                cliente, y no se revelen a ninguna otra persona;
                d. Será responsable de todas las transacciones presentadas a través de su cuenta y cualquier orden
                recibida de esta forma por parte de la Compañía se considerará como dada por el Cliente;
                e. Mediante el presente documento, acepta el riesgo de las apuestas que se efectúen por personas
                no autorizadas y/o que la cuenta sea utilizada por alguien sin el permiso del cliente (en lo sucesivo,
                denominado colectivamente como el "acceso no autorizado" o la "cuenta pirateada"), acordando
                indemnizar a la compañía en su totalidad por todas y cada una de las pérdidas, costes y gastos que se deriven
                a tales efectos. En tal caso, el cliente, además, muestra su conformidad y acepta lo siguiente:
                i. El cliente notificará a la compañía inmediatamente cuando se produzca un acceso no
                autorizado a su cuenta;
                ii. La compañía tendrá derecho a bloquear inmediatamente la cuenta del cliente y a
                incrementar el tiempo de proceso y/o a cancelar las solicitudes de retirada, sin que tenga que
                notificar previamente al cliente, ante lo cual, el cliente no tendrá derecho alguno a los beneficios
                que se hayan obtenido durante el tiempo en el que se haya accedido a la cuenta sin contar con la
                autorización correspondiente;
                iii. El cliente proporcionará a la compañía toda la información que necesite y/o todos los
                documentos que se consideren necesarios, a efectos de poder desbloquear la cuenta.
                f. Por este medio, reconoce que el acceso e identificación frecuentes a la cuenta, a través de las
                diferentes direcciones IP desde los diferentes países o a través de una VPN (a excepción de los usuarios que
                se encuentren en Turquía o en Indonesia) se considerará como un indicio razonable que pueda llevar a la
                compañía a creer, que han ocurrido infracciones al correcto uso de la plataforma.
                g. Confirma que cualquier estrategia de apuesta y/o decisiones y/o cualquier actividad realizada por
                el cliente a través de su Cuenta, y en la Plataforma de Apuestas, se realizan teniendo en
                cuenta/considerando/estando consciente de todos los riesgos involucrados y solo en base a su
                conocimiento y a su sola discreción.
                h. Garantiza que realizará todos los pasos y acciones necesarias para no divulgar ninguna
                información confidencial de la Compañía, que la misma decida divulgar y/o en ocasiones ponga a disposición
                del Cliente.
                i. Acepta cualquier riesgo, incluyendo, sin limitaciones, cualquier riesgo de pérdida financiera, que
                surja del acceso no autorizado a, y con respecto al uso de, su Cuenta por terceros y/o por aquellas partes
                no autorizadas.
                j. Notificará a la Compañía sobre cualquier cambio en relación a sus detalles de contacto y a
                cualquier otro cambio de los datos personales que haya entregado a la Compañía, dentro de los 7 (siete)
                días naturales a partir de que dichos cambios hayan entrado en vigencia.
                k. Registrará solo 1 (una) Cuenta con la Compañía. En caso que el Cliente posea múltiples cuentas,
                cualquier transacción hecha a través de dichas múltiples cuentas, así como los resultados financieros
                correspondientes de tales transacciones, podrán cancelarse a la absoluta discreción de la Compañía. La
                totalidad de dichas cuentas múltiples podrán ser bloqueadas, a entera discreción de la Compañía y, en
                consecuencia, la Compañía tendrá derecho a rescindir este Acuerdo de inmediato, pudiendo cerrar la cuenta
                y todas las apuestas abiertas.
                l. Indemnizará y eximirá a la Compañía ante cualquier reclamación y/o acción legal presentada
                contra la misma, como resultado de la divulgación de los datos personales del Cliente.
                m. Acepta irrevocablemente la plena responsabilidad por sus acciones, de conformidad con la
                legislación tributaria vigente y válida en el lugar de residencia/domicilio del Cliente, y en relación con
                cualquier transacción/Operación realizada, incluyendo, entre otros, el impuesto de la renta/o de beneficios.
                n. Reconoce que la prestación de los Servicios puede involucrar que se transfiera información a
                través de una red abierta. Por lo tanto, la información es transmitida regularmente y sin control de fronteras.
                La Compañía utilizará todos los medios razonables para evitar que la información sea interceptada y leída
                por terceros, mediante el uso de técnicas como el cifrado; sin embargo, no es siempre posible evitar el
                acceso no autorizado de terceros a la información/los datos personales del Cliente. Mediante el presente
                contrato, el Cliente reconoce este riesgo y acepta y autoriza esto, siempre que estén razonablemente
                satisfechos de que cualquier acceso/divulgación no autorizado no se hizo de manera intencional y que la
                Compañía tomó todas las medidas y acciones razonables para evitar este acceso/divulgación no autorizada.
                o. Reconoce que la Compañía prohíbe pagos de terceros o anónimos a la Cuenta del Cliente. Sólo
                son aceptables los fondos enviados desde una cuenta en nombre del Cliente y que pertenecen al Cliente. La
                Compañía se reserva el derecho a su discreción, si ha identificado depósitos de terceros o anónimos, para
                bloquear la Cuenta. El Cliente debe tener en cuenta que los beneficios acumulados por el Cliente con los
                fondos de terceros o anónimos no estarán disponibles para el Cliente.
                p. Acepta irrevocablemente que el Cliente es el único responsable por cualquier deficiencia técnica
                que pueda ocurrir en la conexión del Cliente con la Plataforma de Apuestas, en el equipo del Cliente usado
                para recibir los servicios (incluyendo, sin limitación, computadoras personales, computadoras portátiles,
                teléfono móvil, etc.) y confirma que el Cliente no realizará ningún tipo de reclamación contra la Compañía
                por cualquier daño directo y/o indirecto que el Cliente pueda sufrir debido a tales deficiencias.
                q. Reconoce que la Compañía tiene derecho de rehusar la ejecución de cualquier transacción
                solicitada por el Cliente y/o cualquier otra acción requerida, en virtud de este Contrato, durante el tiempo
                que mantenga cualquier reclamación contra el Cliente, ya sea vencida, futura o contingente e independiente
                de si surgen de la misma transacción de la que surgieron tales obligaciones.
                r. Reconoce y acepta que este Contrato y/o cualquier material disponible en el Sitio Web pueden
                ser modificados unilateralmente, de vez en cuando, por parte de la Compañía, y que el Cliente será
                responsable de revisar el sitio Web de manera frecuente para asegurarse de estar al tanto de cualquier
                cambio realizado de esta manera. Al momento de la presentación de una solicitud por parte del Cliente de
                cualquier transacción/Operación, cualquier modificación realizada a este Contrato y/o a cualquier material
                disponible en el Sitio Web se considerará como reconocida y aceptada por el Cliente.
                s. Si la Compañía considera que las modificaciones son importantes, dichas modificaciones entrarán
                en vigencia en la fecha especificada en el aviso al Cliente y, si no se especifica ninguna fecha, en la fecha de
                recepción del aviso.
                t. El Cliente entiende y acepta que su consentimiento no es necesario para que cualquier cambio
                sea efectivo. Si el Cliente no responde y/o no está de acuerdo con el contenido de las modificaciones
                implementadas en los Términos y Condiciones de la Compañía, dicho acto se considerará como una
                aceptación por parte del Cliente con respecto al contenido de la(s) enmienda(s), así como de los Término(s)
                modificado(s) y de sus Condiciones. Además, cualquier orden del Cliente para ejecutar una transacción(es)
                después de la recepción de la notificación y/o del acceso a su cuenta, se considerará como la aceptación por
                parte del Cliente del contenido de dicha enmienda y del Acuerdo según haya sido modificado.
                u. El Cliente entiende que forma parte de su única responsabilidad mantenerse al día con todos los
                cambios. La versión aplicable será la última versión cargada en el sitio web de la Compañía y en caso de
                disputa legal prevalecerá la última versión.
                v. En caso de que el Cliente no aceptase las modificaciones, tendrá derecho a rescindir el presente
                Contrato de conformidad con la sección Duración y Rescisión del Acuerdo, incluida en este documento.
                3. Por consiguiente, el Cliente garantiza y asegura ante la Compañía que:
                a. Es responsable de confirmar los términos de, y de cumplir con, todas y cada una de las leyes y/o
                regulaciones locales aplicables de las que sea objeto.
                b. Dispone de la capacidad/competencia legal, y pleno uso de sus facultades mentales, así como que
                ha cumplido la mayoría de edad en el país donde reside o del que es ciudadano;
                c. No está sometido a ninguna discapacidad legal con respecto a, y no está sujeto a, ninguna ley o
                regulación que le impida realizar este Contrato o cualquier contrato o transacción contemplada en este
                Contrato.
                d. El Cliente actúa como principal y no como un representante autorizado / apoderado o
                administrador de cualquier tercero;
                e. Los fondos monetarios y/o los instrumentos financieros y otros activos entregados para cualquier
                propósito por parte del Cliente a la Compañía, no están directa o indirectamente conectados con cualquier
                actividad ilegal y/o criminal y/o con el terrorismo.
                f. Los fondos monetarios entregados a efectos de cualquier propósito por el Cliente a la Compañía,
                pertenecen exclusivamente al Cliente y están libres en todo momento de cualquier carga, gravamen,
                compromiso o impedimento.
                g. La información y/o los documentos legales, que el cliente entregue a la Compañía, deberán ser
                auténticos, válidos y libres de cualquier defecto y tendrán el efecto legal que, de hecho, conllevan.
                h. El Cliente garantiza haber proporcionado información correcta, completa y verdadera acerca de
                sí mismo durante el registro y que velará por mantener oportunamente la exactitud de la información
                proporcionada, actualizando cualquier información de registro que pueda haber cambiado. No hacerlo
                podría resultar en el cierre de su Cuenta, en limitaciones a esta y/o en la anulación de cualquier transacción.
                i. El Cliente entregará los documentos a la Compañía antes del depósito de los fondos.
                j. El Cliente confirma que el propósito y la razón de registrarse y operar una cuenta consiste en
                apostar, en su propio nombre y aprovechar los Servicios que la Compañía ofrece. El Cliente garantiza que,
                si cambiara la razón por la que opera una Cuenta, el Cliente deberá informar de esto a la Compañía
                inmediatamente.
                k. El Cliente asegurará y/o continuará con las garantías mencionadas en todo momento, incluyendo,
                sin limitación, durante y/o en el proceso de la ejecución de cualquier transacción, a través de su Cuenta.
                4. La Compañía tendrá derecho a:
                a. Contactar al Cliente sobre cualquier pregunta relacionada con el presente Contrato, incluyendo,
                lo relativo para aclarar las intenciones del Cliente en relación con sus acciones a través de la Cuenta.
                b. Modificar y/o enmendar y/o re-formular, unilateralmente, los términos y condiciones de este
                Contrato y/o del material disponible en el Sitio Web, sin previo aviso al Cliente. La compañía notificará al
                cliente sobre cualquier cambio de esta naturaleza a través del sitio web, WhatsApp o bien enviando un
                correo electrónico al cliente.
                c. Modificar el tamaño del valor de las obligaciones financieras de la Compañía ante el Cliente, si el
                cumplimiento de las Operaciones en la Plataforma de Inversión no cumple con las condiciones del presente
                Contrato.
                d. Involucrar a terceros a efectos de facilitar o mejorar la provisión de los servicios que son objeto
                del presente contrato.
                e. La Compañía se reserva el derecho de solicitar aquellos documentos adicionales que
                proporcionen el respaldo y/o la información correspondiente durante la verificación de la cuenta de
                inversiones del Cliente, e igualmente, de manera continua durante la relación comercial, si dicha
                información fuese necesaria para que la Compañía pueda ofrecer sus servicios al Cliente de manera
                eficiente. Si el Cliente no proporciona a la Compañía, dentro del plazo indicado, ningún documento de apoyo
                adicional, lo cual incluye, entre otros, aquellos documentos de verificación que estén actualizados, la
                Compañía tendrá derecho a rescindir inmediatamente este Acuerdo, pudiendo cerrar la cuenta y todas las
                posiciones abiertas.
                5. Obligaciones de la Compañía:
                a. A efectos de las disposiciones establecidas en este Acuerdo, y al hecho de que la Compañía esté
                razonablemente satisfecha con su cumplimiento, por parte del Cliente, en relación a los términos y
                condiciones de este Contrato y/o que no haya infringido de forma alguna ninguno de los términos de este
                Contrato, la Compañía ofrecerá los Servicios a través del Sitio Web;
                b. Cumplirá con las disposiciones del presente Contrato.
                7. Indemnización y responsabilidad
                1. El Cliente indemnizará y mantendrá a la Compañía y a sus directores, funcionarios, empleados o
                representantes exentos de cualquier responsabilidad, directa o indirecta (incluyendo, sin limitación, todas las
                pérdidas, daños, demandas, costes o gastos), en los que la Compañía o cualquier tercero incurra con respecto a
                cualquier acto u omisión por parte del Cliente en la realización de sus obligaciones en virtud de este Contrato y/o la
                liquidación de cualquier apuesta del Cliente en la liquidación de cualquier reclamación ante la Compañía, a menos
                que tales responsabilidades resulten de la negligencia grave, incumplimiento intencional o fraude por parte de la
                Compañía. Dicha indemnización se extenderá más allá de la finalización de este Contrato.
                2. La Compañía no será responsable de cualquier pérdida, gasto, coste o responsabilidad, directa y/o
                indirecta, en la que el Cliente incurra en relación con este Contrato, a menos que dicha pérdida, gasto, coste o
                responsabilidad sea resultado de la negligencia grave, incumplimiento intencional o fraude por parte de la
                Compañía. Sin perjuicio de las disposiciones de la anterior sección 8.1, la Compañía no tendrá responsabilidad ante
                el Cliente ya sea en agravio (incluyendo negligencia), infracción de deberes legales o, de otra manera, por cualquier
                pérdida de ganancia o por cualquier pérdida indirecta o consecuente que surja en virtud y/o en conexión con el
                Contrato.
                3. La Compañía no será responsable de ninguna pérdida que resulte de la tergiversación de hechos, errores
                de juicio o de cualquier acto realizado o que la Compañía haya omitido realizar, cuando sea que esto ocurra, a menos
                que tal acto u omisión desencadene en una negligencia grave, incumplimiento intencional o fraude por parte de la
                Compañía.
                4. La Compañía no será responsable de ningún acto u omisión o por la insolvencia de cualquier contraparte,
                banco, tutor u otro tercero que actúe en nombre del Cliente, con quien, o a través de quien, se realicen las
                transacciones a nombre del Cliente.
                8. Información personal
                1. Al aceptar los términos y condiciones de este Contrato, el Cliente irrevocablemente consiente la
                recolección y el proceso de sus datos/información personal por parte de la Compañía, sin el uso de los controles
                automáticos, ya que los antes mencionados son entregados por el Cliente a la Compañía. El término "datos
                personales", para los fines de este Contrato, se refiere a: el Nombre, Apellido, Patronímico, género, dirección,
                número telefónico, correo electrónico, dirección IP del Cliente, Cookies y la información que se relacione con la
                prestación de los Servicios al Cliente (por ejemplo, el historial de apuestas del Cliente).
                2. El Cliente estará obligado a entregar datos/información personal correcta, precisa y completa, según lo
                solicite la Compañía.
                3. El propósito de la recolección y el procesamiento de los datos personales consiste en cumplir con los
                requerimientos de la legislación reguladora aplicable, incluyendo, sin limitaciones, las regulaciones contra el lavado
                de dinero, así como para cualquier fin relacionado con este Contrato, incluyendo, sin limitaciones, permitir a la
                Compañía cumplir con sus obligaciones ante el Cliente.
                4. El Cliente reconoce y consiente que, para los fines descritos en la sección anterior, la Compañía tendrá
                derecho a recolectar, registrar, sistematizar, acumular, almacenar, ajustar (actualizar, cambiar), extraer, usar,
                transferir (divulgar, entregar, acceder), anonimizar, bloquear, eliminar y destruir dichos datos personales y/o a
                realizar cualquier otra acción, en virtud de la legislación reguladora vigente.
                5. El Cliente reconoce y consiente que la compañía almacene, mantenga y procese sus datos personales
                según se describe en este contrato, durante la vigencia del mismo y como mínimo durante 7 años después de
                cualquier finalización de dicho contrato.
                6. Mediante el presente contrato, el Cliente reconoce, acepta, muestra su conformidad y consiente la
                divulgación de sus datos personales, por parte de la Compañía, hacia terceros y hacia sus representantes, solamente
                a los efectos de este Contrato, lo cual incluye, entre otros aspectos, facilitar el proceso/ejecución de las
                órdenes/Operaciones del Cliente, siempre que, en todo momento (i) la cantidad de datos personales que se
                divulguen a dicho tercero sea razonable y/o solo para facilitar cuantas acciones hayan sido descritas con
                anterioridad, igualmente (ii) la Compañía garantizará que dicho tercero trate los datos personales según lo
                establecido en las leyes y regulaciones que sean aplicables.
                7. La Compañía no tendrá derecho a que estén disponibles los datos personales de manera pública y/o a
                divulgar tales datos personales para cualquier otro propósito, conforme a la divulgación requerida por las leyes y
                regulaciones aplicables.
                8. Durante el proceso de los datos personales, la Compañía tomará todas las medidas legales,
                organizacionales y técnicas necesarias para proteger dichos datos personales del acceso, destrucción, cambio,
                bloqueo, copia, entrega y divulgación, ya sea no autorizada o accidental, así como contra cualquier otra acción ilegal.
                9. Asignación
                1. El Acuerdo será personal para el Cliente y el Cliente no podrá ceder o transferir ninguno de sus derechos
                u obligaciones contemplados en el presente Acuerdo.
                2. La Compañía podrá, en cualquier momento, asignar o transferir a un tercero alguno de sus derechos u
                obligaciones contemplados en el presente Acuerdo. La Compañía notificará al Cliente de dicha asignación.
                10. Declaración de riesgo
                Mediante el presente, el Cliente confirma haber leído, comprendido y aceptado la declaración de riesgo relacionada
                con el uso de los Servicios en el Sitio Web, ya que dicha información está disponible de forma electrónica en el Sitio
                Web.
                Al aceptar este Acuerdo, el Cliente acepta que ha leído y entendido la información contenida en este Acuerdo, así
                como la descripción general expresada por la Compañía en relación a la naturaleza y riesgos de apostar.
                11. Legislación aplicable
                1. Los términos y condiciones de este Contrato, así como cualquier asunto que pertenezca al mismo,
                incluyendo, sin limitación, los asuntos de interpretación y/o disputas, se regirán por las leyes de San Vicente y las
                Granadinas.
                2. La Compañía y los Clientes se someten irrevocablemente a la jurisdicción de los juzgados de San Vicente
                y las Granadinas.
                3. Según la legislación de San Vicente y las Granadinas, la Compañía tendrá derecho a usar los servicios de
                un intérprete durante el juicio, en caso de tratarse de una situación que sea objeto de disputa.
                12. Duración y finalización del contrato
                1. El presente Contrato se celebra durante un tiempo indefinido.
                2. El presente Contrato entrará en vigor cuando el Cliente lo acepte y realice un pago anticipado a la
                Compañía.
                3. En caso de existir discrepancias entre el texto del Acuerdo en español y su traducción en cualquier otro
                idioma, prevalecerá el texto del Acuerdo en español como un todo, así como la versión/texto en español de
                cualquier otra documentación/información que haya sido publicada en el sitio web.
                4. El contrato podrá finalizarse en cualquiera de las siguientes circunstancias:
                A. Cada Parte tendrá derecho a finalizar este Contrato en cualquier momento, avisando a la otra
                parte, por escrito, con 15 (quince) días de anticipación. Durante el período de 15 días de la notificación, la
                Compañía podrá limitar los servicios disponibles para el Cliente, no obstante, se le concederá acceso para
                que retire el saldo restante.
                B. La Compañía tendrá derecho a rescindir este Contrato de inmediato, cerrar todas las aouestas
                abiertas, bloquear la cuenta del Cliente y a devolver los fondos restantes (si procede) y sin previo aviso en
                las siguientes circunstancias:
                i. Muerte o incapacidad legal del Cliente;
                ii. Si se hace una solicitud o se emite una orden, o si se convoca una reunión, se aprueba un
                acuerdo o bien se toman medidas a efectos de quiebra o liquidación en relación al Cliente.
                iii. El Cliente infringe o la Compañía tiene fundamentos razonables para creer que el Cliente
                ha infringido, cualquiera de las obligaciones del Cliente en virtud y/o en relación a este Contrato,
                y/o si igualmente infringe cualquiera de las garantías y representaciones hechas por el Cliente en
                este Contrato.
                iv. Si la Compañía tiene conocimiento y/o si tiene fundamentos razonables para creer que
                el Cliente no ha llegado a la mayoría de edad en el país donde reside o del que es ciudadano, según
                corresponda.
                v. Si la Compañía tiene sospechas basadas en la información disponible sobre Cliente en
                relación a que:
                a. Esté y/o haya estado usando medios fraudulentos o estuviese involucrado en un
                esquema fraudulento en relación con la ejecución de este Acuerdo;
                b. Haya obtenido ilegalmente una ventaja injusta de forma impropia y/o injusta y/o
                de otra manera, sobre y/o el detrimento de (i) otros clientes de la Compañía y/o (ii) la
                Compañía;
                c. Se haya enriquecido injustamente al usar información que fuese intencional y/o
                negligente y/o encubierta y/o no revelada por adelantado por el Cliente a la Compañía, y/o
                que si la Compañía hubiera sabido de antemano, no la hubiera consentido y/o no hubiere
                autorizado el uso de dicha información por parte del Cliente con respecto a los fines de este
                Acuerdo; y/o
                d. Haya realizado actos con la intención y/o efecto de manipular y/o de abusar de la
                plataforma y/o de los sistemas de apuesta de la Compañía y/o para engañar a la
                Compañía y/o para defraudar a la Compañía; y/o
                e. Haya actuado de mala fe durante el cumplimiento de sus obligaciones bajo este
                Acuerdo.
                vi. Cuando el Cliente sea culpable o la Compañía tenga sospechas de que el cliente fuese
                culpable de conducta maliciosa o de negligencia grave, de fraude o de usar medios fraudulentos o
                bien estuviera involucrado en un esquema de fraude en relación con la ejecución de este Acuerdo.
                vii. La finalización del contrato debe ejercerse en virtud de la legislación aplicable.
                viii. Si el Cliente recibe 2 advertencias relacionadas con el abuso verbal contra los empleados
                de la Compañía.
                ix. Si el cliente no proporciona los documentos KYC ("conoce a tu cliente") en un plazo de 14
                días y desde el momento en que se haya aceptado este contrato, lo que indefectiblemente implicará
                que, su cuenta, sea una cuenta que no ha sido verificada.
                x. En caso de que el Cliente utilice y/o haya indicios que lleven a la Compañía a creer
                razonablemente que el Cliente utiliza diferentes direcciones IP de distintos países y/o mediante el
                uso de un VPN y/o VPS durante el curso de la ejecución de cualquier transacción(es) a través de la
                Cuenta Real y/o durante la prestación de los Servicios. Ya sea que el Cliente haya notificado a la
                Compañía de cualquier cambio en su dirección IP y/o de que el uso de un VPN y/o VPS sea
                irrelevante, a excepción de los usuarios que se encuentren en Turquía o en Indonesia.
                xi. Que el Cliente haya iniciado una devolución en relación a los fondos mantenidos en la
                cuenta del Cliente. Si la compañía descubriese que el cliente hubiere creado una(varias) cuenta(s)
                de inversión(es) adicional(es) después de la disputa de reembolsabilidad, en tal caso, la compañía
                tendrá derecho, sin previo aviso e inmediatamente, a rescindir el contrato, pudiendo cerrar todas
                las posiciones abiertas. Además, también podrá bloquear la(s) cuenta(s) y devolver los fondos
                restantes (si fuese necesario) excluyendo ganancias.
                xii. Cuando la Compañía identifique que el Cliente está involucrado y/o está utilizando un
                software de inversión de alta frecuencia, a efectos de manipular los sistemas y/o la plataforma de
                inversión de la Compañía y/o haya obtenido ilegalmente y/o indebidamente y/o maliciosamente, a
                sabiendas, una ventaja injusta sobre, y/o, en detrimento de otros clientes de la Compañía y/o la
                Compañía y/o dicho software de negociación de alta frecuencia haya sido diseñado para abusar de
                los sistemas y/o de la plataforma de inversión de la Compañía.
                xiii. Cuando la Compañía identifique que los fondos y/o la(s) cuenta(s) de pago del Cliente
                se haya(n) utilizado para financiar una cuenta de terceros, y cuando tenga, en tales circunstancias,
                sospechas razonables de que el Cliente y/o la tercera parte, esté(n) eludiendo cualesquiera de las
                cláusulas del presente Acuerdo al actuar de tal forma, y/o cuando esté actuando en colaboración
                con un tercero que eluda cualesquiera de las cláusulas de este Acuerdo.
                5. En el caso de producirse la finalización de este contrato, la compañía no será responsable ante el cliente
                y, en consecuencia, no estará obligada a pagar las ganancias de este (si las hubiere).
                13. Términos y condiciones para el servicio en 1-clic
                1. El Cliente acordará realizar un depósito en su Cuenta para usar los Servicios de la Compañía y cualquier
                otro servicio adicional solicitado por el Cliente en el Sitio Web, así como todos los gastos adicionales (si fuera
                necesario), incluyendo, sin limitaciones, cualquier impuesto, gravamen, etc. El Cliente será completamente
                responsable por el depósito oportuno de fondos en su Cuenta. El proveedor de los servicios de pago garantizará
                solo el cumplimiento del pago en la cantidad definida por el Sitio y no será responsable por el pago de las cantidades
                adicionales mencionadas anteriormente por parte del Sitio Web del Cliente.
                2. El pago se considera como procesado, y no se podrá devolver, después de hacer clic sobre el botón
                "Depositar". Al hacer clic en el botón "Depositar", el Cliente acuerda que no se podrá devolver el pago o requerir
                que este se retire. Adicionalmente, al aceptar los términos y condiciones contenidos en el presente contrato, el
                Cliente, como titular de la tarjeta de pago, confirma que tiene derecho a usar los Servicios ofrecidos en el Sitio Web.
                3. Al aceptar los términos y condiciones de este Contrato, y depositar fondos en la Cuenta, el Cliente acuerda
                usar los Servicios del Sitio Web y acepta que el proceso de cualquier pago del Cliente será ejecutado por un
                proveedor de servicios de pago, siendo este un tercero en relación a este Contrato (el Proveedor) y, además, el
                Cliente reconoce y acepta que no existen derechos legales para la devolución de los Servicios ya adquiridos u otras
                opciones de cancelación de pago. En el caso de que el Cliente esté dispuesto a negarse a usar el servicio en 1-clic,
                para la siguiente compra del Servicio, el Cliente podrá rechazar el servicio en 1-Clic usando su Cuenta en el Sitio
                Web.
                4. Tenga en cuenta que los depósitos en 1-clic (pagos recurrentes) no se procesan como transacciones
                seguras 3-D, ya que el cliente deberá habilitar la función de seguridad 3-D si desea que los pagos se procesen como
                "seguros 3-D".
                5. El Proveedor no resultará responsable, en ningún caso, por el rechazo/imposibilidad de procesar los datos
                relacionados con la tarjeta de pago del Cliente, o por el rechazo relacionado con la ausencia de autorización con
                respecto al banco emisor, a efectos de procesar el pago usando la tarjeta de pago del Cliente. El Proveedor no será
                responsable, en ningún caso, por la calidad, la cantidad y el precio de cualquier servicio, ofrecido al Cliente o
                comprado por este en el Sitio Web, usando la tarjeta de pago del Cliente. Al pagar por cualquier Servicio del Sitio
                Web, el Cliente, primero, estará obligado a cumplir con las reglas de uso del Sitio Web. Por favor tenga en cuenta
                que solo el Cliente, como dueño de la tarjeta de pago, será responsable por el pago oportuno de cualquier servicio
                ordenado a través del Sitio Web y por todos los gastos/tarifas adicionales relacionados con dicho pago. El Proveedor
                solo será quien realice el pago por la cantidad especificada en el Sitio Web, y no será responsable, en ningún caso,
                por la fijación de precios, precios generales y/o sumas totales.
                6. En caso de ocurrir una situación relacionada con un desacuerdo del Cliente en relación a los términos
                mencionados anteriormente y/o por cualquier otra razón, le pedimos al cliente que rechace oportunamente la
                realización de cualquier pago y se dirija directamente al administrador/soporte del Sitio Web, si fuera necesario.
            </Text>
            <TouchableOpacity style={styles.floatingButton} onPress={handleScrollToTop}>
                <Image source={require('../images/top.png')} style={styles.buttonImage} />
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white', // Cambiado a negro para mayor legibilidad
        alignSelf: "center",
    },
    text: {
        fontSize: 14,
        marginBottom: 10,
        color: 'white', // Cambiado a negro para mayor legibilidad
        textAlign: 'justify', // Justificar el texto
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue', // Solo para visualización
    },
    buttonImage: {
        width: 50,
        height: 50,
    },
});

export default Terminos;