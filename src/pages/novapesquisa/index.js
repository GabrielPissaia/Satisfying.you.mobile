import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DefaultButton } from '../../components/DefaultButton';
import DefaultInput from '../../components/DefaultInput';
import { Navbar } from '../../components/Navbar';
import styles from './styles';

export default function NovaPesquisa(props) {

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const goToPaginaPrincipal = () => {
    props.navigation.navigate('PaginaPrincipal')
  }

  const handleEmailChange = (text) => {
    setEmail(text);
    const regex = /^[a-zA-Z0-9._-]/
    setEmailError(regex.test(text) ? "" : "Campo Obrigatorio")
  }

  return (
    <View style={styles.container}>
      <Navbar title={'Nova pesquisa'} ></Navbar>
      <View style={styles.forms}>
        <DefaultInput secure={false} title={'Nome'} size={350} borderRadius={8} onChangeText={handleEmailChange} error={emailError}/>
        <DefaultInput secure={false} title={'Data'} size={350} borderRadius={8} onChangeText={handleEmailChange} error={emailError}/>
        <DefaultInput secure={false} placeholder={'Câmera/Galeria de imagens'} title={'Imagem'} size={350} height={70}borderRadius={8}/>
      </View>
      <View style={styles.botao}>
        <DefaultButton title={'CADASTRAR'} color={'#37BD6D'} width={350} onPress={goToPaginaPrincipal} />
      </View>
    </View>
  );
}
