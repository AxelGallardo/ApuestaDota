import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './components/Footer';
import Real from './components/Real';
import Practica from './components/Practica';
import Versus from './components/Versus';
import Configuracion from './components/Configuracion'; // Importa el componente de Configuracion

const App = () => {
  const [content, setContent] = useState('Real');
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const changeContent = (selectedContent) => {
    setContent(selectedContent);
  };
  const toggleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
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
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={['#0A1D21', '#0A1D21', '#0A1D21']}
      style={styles.container}>
      <Header onSettingsPress={toggleSettings} />
      <View style={styles.content}>
        {isSettingsVisible ? <Configuracion /> : renderContent()}
      </View>
      {!isSettingsVisible && <Footer changeContent={changeContent} />}
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
