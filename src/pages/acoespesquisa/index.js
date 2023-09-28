import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function AcoesPesquisa() {
  const { goBack, navigate } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={styles.container}>
        <View style={styles.nav} >
            <TouchableOpacity onPress={navigateBack}><Icon name="arrow-back" size={48} color="#573FBA" /></TouchableOpacity>
            <Text style={styles.texto2}>Carnaval</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Icon name="edit-document" size={48} color="#F9F9F9" /> 
            <Text style={styles.texto}>Modificar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Icon name="devices" size={48} color="#F9F9F9" /> 
            <Text style={styles.texto}>Coletar dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Icon name="donut-large" size={48} color="#F9F9F9" /> 
            <Text style={styles.texto}>Relatório</Text>
        </TouchableOpacity>
    </View>
  );
}
