import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import { DefaultSquareDiv } from '../components/DefaultSquareDiv';


export default function Main(props) {

  const goToNovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa')
  }

  return (
    <View style={styles.container}>
      <DefaultInput style={styles.busca} placeholder={'🔍  Insira o termo de busca'} size={350} />
      <ScrollView horizontal={true} style={styles.scrollView}>
        <View style={styles.squaresContainer}>
          <DefaultSquareDiv  style={styles.div} text="SECOMP 2023" data="10/10/2023" imageSource={require('../assets/img/ImagemSquare1.png')}/>
          <DefaultSquareDiv  style={styles.div} text="UBUNTU 2022" data="05/06/2022" imageSource={require('../assets/img/imagemSquare2.png')}/>
          <DefaultSquareDiv  style={styles.div} text="MENINAS CPU" data="01/04/2022" imageSource={require('../assets/img/imagemSquare3.png')}/>
        </View>
      </ScrollView>
      <DefaultButton style={styles.botao} title={'Nova Pesquisa'} color={'#37BD6D'} width={350} onPress={goToNovaPesquisa}/>
    </View>
  );
}

const styles = StyleSheet.create({
  busca: {
    paddingLeft: 100,
  },
  container: {
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start',
    gap: 20, 
  },
  scrollView: {
    height: 200, 
  },
  squaresContainer: {
    flexDirection: 'row',
    paddingTop: 140
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
  }

});
