import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
      backgroundColor: '#372775',
      flex: 1,
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },

    button: {
      top: -25,
      backgroundColor: '#2B1D62',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      padding: 0,
      width: 125,
      height:125,
      margin: 5
    },

    texto: {
      marginTop: 10,
      color: '#fff'
    },

    nav: {
      backgroundColor: '#2B1D62',
      width: '100%',
      height: 90,
      padding: 24,
      top: -110,
      flexDirection: 'row',
      alignItems: 'center'
    },

    texto2: {
      marginLeft: 20,
      color: '#fff',
      fontSize: 32
    },
  });

export default styles;