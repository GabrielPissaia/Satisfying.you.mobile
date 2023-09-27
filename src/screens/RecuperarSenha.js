import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';

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

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  input: {
    borderWidth: 1,
    borderRadius: 20,
    padding: '2%',
    width: 300,
    color: 'white',
    borderColor: 'white'
  },

  bottomContainer:{
    gap: 10,
    marginTop: 50
  }
});
