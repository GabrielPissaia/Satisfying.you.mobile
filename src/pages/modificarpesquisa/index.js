import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { DefaultButton } from '../../components/DefaultButton';
import DefaultInput from '../../components/DefaultInput';
import styles from './styles';
import { Navbar } from '../../components/Navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from '../../components/ModalApagar';
import { useState } from 'react';

export default function NovaPesquisa(props) {
  const [openModal, setOpenModal] = useState(false)
  const goToPaginaPrincipal = () => {
    props.navigation.navigate('PaginaPrincipal')
  }

  return (
    <View style={styles.container}>
      <Navbar title={'Modificar pesquisa'} ></Navbar>
      <View style={styles.main}>
        <View style={styles.forms}>
          <DefaultInput secure={true} title={'Nome'} size={350} borderRadius={8}/>
          <DefaultInput secure={true} title={'Data'} size={350} borderRadius={8}></DefaultInput>
          <DefaultInput secure={true} placeholder={'Câmera/Galeria de imagens'} title={'Imagem'} size={350} height={70}borderRadius={8}/>
        </View>
        

        
      </View>
      <View style={styles.botao}>
          <View style={styles.botao2}>
              <DefaultButton title={'SALVAR'} color={'#37BD6D'} width={285} height={45} onPress={goToPaginaPrincipal}/>
              <TouchableOpacity style={styles.botao3} onPress={setOpenModal} >
              <View >
                <Icon name="delete" size={50} color="#FFFFFF" /> 
                  <Text style={styles.apagarText}>Apagar</Text>
                </View>
            </TouchableOpacity>
            </View>
          </View>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
    </View>
    
  );
}