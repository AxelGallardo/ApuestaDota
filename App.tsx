import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './components/Footer';
import Real from './components/Real';
import Practica from './components/Practica';
import Versus from './components/Versus';

const App = () => {
  const [content, setContent] = useState('Real');

  const changeContent = (selectedContent) => {
    setContent(selectedContent);
  };

  const renderContent = () => {
    switch (content) {
      case 'Real':
        return <Real />;
      case 'Practica':
        return <Practica />;
      case 'Versus':
        return < Versus />;
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={['#383A68', '#3C3D6D', '#151721']}
      style={styles.container}>
      <Header />
      <View style={styles.content}>
        {renderContent()}
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
