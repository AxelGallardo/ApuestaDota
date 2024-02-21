import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#61FF79', // Color principal del botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Bordes redondeados para un look moderno
    shadowColor: '#0A1D21', // Sombra que combina con los colores del gradiente
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Elevación para Android
    width: 300,
    marginTop: 0,
    marginBottom: 10,
   
    
  },

  selectedButton: {
    backgroundColor: '#39FF14', // Cambia el color de fondo cuando está seleccionado
    marginBottom: 10,
    
    
},


  buttonText: {
    color: '#0A1D21', // Texto que contrasta con el botón
    fontWeight: 'bold',
    textAlign: 'center',
  },

  selectedButtonText: {
    color: '#000000', // Cambia el color del texto a negro cuando está seleccionado
},





  
});
