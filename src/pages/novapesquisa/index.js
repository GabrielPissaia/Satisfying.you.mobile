import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ButtonGeral from '../../components/ButtonGeral';
import InputTexto from '../../components/InputTexto';
import { Navbar } from '../../components/Navbar';
import styles from './styles';
import Card from '../../components/Card';
import { createSurvey } from '../../services/firestoreService';

export default function NovaPesquisa(props) {

  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [img, setImg] = useState('')
  const [nameError, setNomeError] = useState('')

  const handleNameChange = (text) => {
    setNome(text);
    const regex = /^[a-zA-Z0-9._-]/
    setNomeError(regex.test(text) ? "" : "Campo Obrigatorio")
  }

  const handleDataChange = (text) => {
    setData(text);
  }

  const handleImgChange = (text) => {
    setImg(text);
  }

  const newSurvey = async () => {
    try {
      const dados = { nome, data, img }
      const survey = await createSurvey(dados);
      console.log(survey)
      props.navigation.navigate('Drawer');
    } catch (error) {
      console.error("Erro durante a criacao de pesquisa:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar title={'Nova pesquisa'} ></Navbar>
      <View style={styles.forms}>
        <InputTexto secure={false} title={'Nome'} size={350} borderRadius={8} onChangeText={handleNameChange} error={nameError}/>
        <InputTexto secure={false} title={'Data'} size={350} borderRadius={8} onChangeText={handleDataChange}/>
        <InputTexto secure={false} title={'Imagem'} size={350} borderRadius={8} onChangeText={handleImgChange}/>
        <Card style={styles.imagem} imageSource={require('../../assets/img/ImagemSquare1.png')}/>
      </View>
      <View style={styles.botao}>
        <ButtonGeral title={'CADASTRAR'} color={'#37BD6D'} width={350} onPress={newSurvey} />
      </View>
    </View>
  );
}
