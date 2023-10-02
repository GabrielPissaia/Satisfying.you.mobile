import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#372775',
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'flex-start',
      gap: 20, 
    },
    squaresContainer: {
      flexDirection: 'row',
      paddingTop: 140,
      marginTop: -50
    },
    div: {
      backgroundColor: 'white',
      width: 200,
      height: 200,
      marginLeft: 10,
    },
    botao: {
      marginBottom: 20
    },
    content1: {
      color:'black'
    },

    nav: {
      position: 'absolute',
      backgroundColor: '#2B1D62',
      width: '100%',
      height: 90,
      padding: 24,
      top: 0,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 50
    },
  
  });

  export default styles;