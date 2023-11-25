import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Navbar } from '../../components/Navbar';
import styles from './styles';
import { useCallback } from 'react';

export default function AcoesPesquisa(props) {
  const { navigate } = useNavigation();
  const route = useRoute()
  const id = route.params.id

  const goToModificarPesquisa = useCallback(
    () => {
      navigate('ModificarPesquisa', { id });
    },
    [navigate],
  );
  const goToColeta = () => {
    props.navigation.navigate('Coleta')
  }
  const goToRelatorio = () => {
    props.navigation.navigate('Relatorio')
  }

  return (
    <View style={styles.container}>
        <Navbar title={'Carnaval'} top={-110}></Navbar>
        <TouchableOpacity style={styles.button} onPress={goToModificarPesquisa}>
            <Icon name="edit-document" size={48} color="#F9F9F9" /> 
            <Text style={styles.texto}>Modificar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToColeta}>
            <Icon name="devices" size={48} color="#F9F9F9" /> 
            <Text style={styles.texto}>Coletar dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToRelatorio}>
            <Icon name="donut-large" size={48} color="#F9F9F9" /> 
            <Text style={styles.texto}>Relatório</Text>
        </TouchableOpacity>
    </View>
  );
}
