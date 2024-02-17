// RealListStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    marginLeft: 10,
    height: 50,
    borderColor: '#B6FF40',
    borderWidth: 2,
    alignSelf: 'center',
    width: '80%',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  instructions: {
    color: 'white',
    marginTop: 10,
    marginBottom: 50,
    textAlign: 'center',
  },
  saldoDisponibleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292948',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    marginLeft: 10,
    height: 50,
    borderColor: '#B6FF40',
    borderWidth: 1,
    alignSelf: 'center',
    width: '80%',
  },
  recargarIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  saldoDisponibleText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  square: {
    backgroundColor: '#1F1F37',
    borderRadius: 20,
    borderColor: '#1F1F37',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 40,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    height: 180,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxImage: {
    width: 60,
    height: 180,
    marginRight: -500,
  },
  checked: {
    backgroundColor: '#B6FF40',
  },
  checkboxText: {
    color: 'white',
    fontSize: 16,
    flexShrink: 1,
  },
  yellowText: {
    color: '#EDBD0E',
    fontWeight: 'bold',
    fontSize: 16,
  },
  greenText: {
    color: '#B6FF39',
    fontWeight: 'bold',
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
  describirText: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  buttonContainer: {
    marginBottom: 60,
    marginTop: 50,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#B6FF40',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  apuestasRealizadas: {
    marginTop: 30,
    marginBottom: 30,
    width: 320,
    minHeight: 50,
    backgroundColor: '#1C1C38',
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: '#B6FF40',
    borderWidth: 2,
    justifyContent: 'center',
  },
  apuestasRealizadasTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  rectangle: {
    marginTop: 30,
    marginBottom: 30,
    width: 350,
    height: 500,
    backgroundColor: '#1C1C38',
    alignSelf: 'center',
    borderRadius: 15,
  },
  rectangleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  rectangleSubtitle: {
    fontSize: 14,
    color: '#B6FF40',
    textAlign: 'center',
    marginTop: 10,
  },
  rectangleText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
    textAlign: 'justify',
  },
  greenTextReglas: {
    color: '#B6FF39',
    fontWeight: 'bold',
    fontSize: 12,
  },

// Agrega esto a tu archivo RealListStyles.ts
outerContainer: {
    flex: 1, // Esto asegura que el contenedor use todo el espacio disponible
  },
  fixedImage: {
    position: 'absolute', // Posiciona la imagen de forma absoluta
    right: 20, // A 100 píxeles del borde derecho
    bottom: 20, // A 200 píxeles del borde inferior
    width: 50, // Ancho de la imagen
    height: 50, // Alto de la imagen
  },

  
});
