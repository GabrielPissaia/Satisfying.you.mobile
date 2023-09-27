import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';



export default function NovaPesquisa(props) {

  const goToPaginaPrincipal = () => {
    props.navigation.navigate('Pagina Principal')
  }

  return (
    <View style={styles.container}>
      <View style={styles.forms}>
      <DefaultInput secure={true} title={'Nome'} size={350} borderRadius={8}/>
      <DefaultInput secure={true} title={'Data'} size={350} borderRadius={8}></DefaultInput>
      <DefaultInput secure={true} placeholder={'Câmera/Galeria de imagens'} title={'Imagem'} size={350} height={70}borderRadius={8}/>
      </View>
      <TouchableOpacity  >
        <View >
            <Image source={require('../assets/img/lixeria.png')} style={styles.trashIcon} />
            <Text style={styles.apagarText}>Apagar</Text>
          </View>
      </TouchableOpacity>

      <View style={styles.botao}>
      <DefaultButton   title={'SALVAR'} color={'#37BD6D'} width={350} onPress={goToPaginaPrincipal}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forms: {
    paddingTop: 30
  },
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
  botao: {
    flex: 1, 
    justifyContent: 'flex-end', 
    marginBottom: 20, 
  },
  content1: {
    color:'black'
  },
  apagarText: {
    fontSize: 16, 
    color: 'white', 
  },


});
