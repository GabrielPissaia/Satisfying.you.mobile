import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultButton } from '../../components/DefaultButton';
import DefaultInput from '../../components/DefaultInput';
import styles from './styles';

export default function RecuperarSenha() {
  const [email, setEmail] = useState('')

  const [emailError, setEmailError] = useState('')

  const handleEmailChange = (text) => {
    setEmail(text);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    setEmailError(regex.test(text) ? "" : "E-mail parece ser inválido")
  }

  return (
    <View style={styles.container}>
      <DefaultInput onChangeText={handleEmailChange} placeholder={'Digite seu email'} title={'E-mail'} size={300} error={emailError} borderRadius={8}/>
  
      <DefaultButton title={'Recuperar'} color={'#37BD6D'} width={300} disabled={Boolean(emailError)}/>
      
    </View>
  );
}
