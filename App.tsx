import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './components/Footer';
import Real from './components/Real';
import Practica from './components/Practica';
import Versus from './components/Versus';
import Configuracion from './components/Configuracion';
import Info from "./components/Info";
import Notificacion from "./components/Notificacion";

const App = () => {
  const [content, setContent] = useState('Real');
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isNotificacionVisible, setIsNotificacionVisible] = useState(false);

  const changeContent = (selectedContent) => {
    setContent(selectedContent);
    setIsSettingsVisible(false);
    setIsInfoVisible(false);
    setIsNotificacionVisible(false);
  };

  const toggleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
    if (isInfoVisible) setIsInfoVisible(false);
    if (isNotificacionVisible) setIsNotificacionVisible(false);
  };

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
    if (isSettingsVisible) setIsSettingsVisible(false);
    if (isNotificacionVisible) setIsNotificacionVisible(false);
  };

  const toggleNotificacion = () => {
    setIsNotificacionVisible(!isNotificacionVisible);
    if (isSettingsVisible) setIsSettingsVisible(false);
    if (isInfoVisible) setIsInfoVisible(false);
  };

  const changeToMainSection = () => {
    setContent('Real'); // Asume 'Real' como la sección principal
    setIsSettingsVisible(false);
    setIsInfoVisible(false);
    setIsNotificacionVisible(false);
  };


  const renderContent = () => {
    switch (content) {
      case 'Real':
        return <Real />;
      case 'Practica':
        return <Practica />;
      case 'Versus':
        return <Versus />;
      case 'Configuracion': // Agrega un caso para renderizar el componente de configuración
        return <Configuracion />;
      case 'Infor': // Agrega un caso para renderizar el componente de configuración
        return <Info />;
      case 'Notificacion': // Agrega un caso para renderizar el componente de configuración
        return <Notificacion />;
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={['#0A1D21', '#0A1D21', '#0A1D21']}
      style={styles.container}>
      <Header onSettingsPress={toggleSettings} onInfoPress={toggleInfo} onNotificacionPress={toggleNotificacion} onMainPress={changeToMainSection} />
      <View style={styles.content}>
        {isSettingsVisible ? <Configuracion /> : isInfoVisible ? <Info /> : isNotificacionVisible ? <Notificacion /> : renderContent()}
      </View>
      <Footer changeContent={changeContent} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default App;
