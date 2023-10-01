import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DefaultButton } from '../../components/DefaultButton';
import DefaultInput from '../../components/DefaultInput';
import { Navbar } from '../../components/Navbar';
import styles from './styles';

export default function NovaPesquisa(props) {

  const goToPaginaPrincipal = () => {
    props.navigation.navigate('PaginaPrincipal')
  }

  return (
    <View style={styles.container}>
      <Navbar title={'Nova pesquisa'} ></Navbar>
      <View style={styles.forms}>
        <DefaultInput secure={true} title={'Nome'} size={350} borderRadius={8} error={'Preencha no nome da pesquisa'}/>
        <DefaultInput secure={true} title={'Data'} size={350} borderRadius={8} error={'Preencha a data'}/>
        <DefaultInput secure={true} placeholder={'Câmera/Galeria de imagens'} title={'Imagem'} size={350} height={70}borderRadius={8}/>
      </View>
      <View style={styles.botao}>
        <DefaultButton title={'CADASTRAR'} color={'#37BD6D'} width={350} onPress={goToPaginaPrincipal} />
      </View>
    </View>
  );
}
