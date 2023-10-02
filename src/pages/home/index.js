import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import  ButtonGeral  from '../../components/ButtonGeral';
import InputTexto from '../../components/InputTexto';
import Card from '../../components/Card';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main(props) {
  const goToNovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa')
  }
  const goToAcoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa')
  }

  return (
    <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => {}}><Icon name="view-headline" size={48} color="#573FBA" /></TouchableOpacity>
        </View>
        <InputTexto placeholder={'Insira o termo de busca'} size={320} marginTop={100} />
        <ScrollView horizontal={true} style={styles.scrollView}>
          <View style={styles.squaresContainer}>
            <Card style={styles.div} text="CARNAVAL 2023" data="10/10/2023" imageSource={require('../../assets/img/ImagemSquare1.png')} onPress={goToAcoesPesquisa}/>
            <Card style={styles.div} text="UBUNTU 2022" data="05/06/2022" imageSource={require('../../assets/img/imagemSquare2.png')} onPress={goToAcoesPesquisa}/>
            <Card style={styles.div} text="MENINAS CPU" data="01/04/2022" imageSource={require('../../assets/img/imagemSquare3.png')} onPress={goToAcoesPesquisa}/>
          </View>
      </ScrollView>
      <ButtonGeral style={styles.botao} title={'Nova Pesquisa'} color={'#37BD6D'} width={350} onPress={goToNovaPesquisa}/>
    </View>
  );
}
