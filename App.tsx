import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './components/Footer';
import Real from './components/Real';
import Practica from './components/Practica';
import Versus from './components/Versus';
import Configuracion from './components/Configuracion'; // Importa el componente de Configuracion
import Info from "./components/Info";

const App = () => {
  const [content, setContent] = useState('Real');
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const changeContent = (selectedContent) => {
    setContent(selectedContent);
  };
  const toggleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
    // Asegurarse de ocultar la información si está visible
    if (isInfoVisible) setIsInfoVisible(false);
  };

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
    // Asegurarse de ocultar configuración si está visible
    if (isSettingsVisible) setIsSettingsVisible(false);
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
        return <Configuracion />;
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={['#0A1D21', '#0A1D21', '#0A1D21']}
      style={styles.container}>
      <Header onSettingsPress={toggleSettings} onInfoPress={toggleInfo} />
      <View style={styles.content}>
        {isSettingsVisible ? <Configuracion /> : isInfoVisible ? <Info /> : renderContent()}
      </View>
      {!isSettingsVisible && !isInfoVisible && <Footer changeContent={changeContent} />}
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
