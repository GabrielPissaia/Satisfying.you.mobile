import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultButton } from '../components/DefaultButton';
import DefaultInput from '../components/DefaultInput';
import { Logo } from '../components/Logo';

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  const goToCriarConta = () => {
    props.navigation.navigate('NovaConta')
  }

  const goToRecuperarSenha = () => {
    props.navigation.navigate('RecuperarSenha')
  }

  const goToPaginaPrincipal = () => {
    props.navigation.navigate('PaginaPrincipal')
  }

  const handleEmailChange = (text) => {
    setEmail(text);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    setEmailError(regex.test(text) ? "" : "Email inválido")
  }

  const handlePasswordChange = (text) => {
    setPassword(text); 
  }

  return (
    <View style={styles.container}>
      <Logo/>
      <DefaultInput placeholder={'Digite seu email'} title={'E-mail'} size={300} onChangeText={handleEmailChange} error={emailError}/>
      <DefaultInput secure={true} placeholder={'Digite sua senha'} title={'Senha'} onChangeText={handlePasswordChange} size={300}/>

      <DefaultButton title={'Entrar'} color={'#37BD6D'} width={300} disabled={Boolean(emailError) || email == '' || password == ''} onPress={goToPaginaPrincipal}/>
  
      <View style={styles.bottomContainer}>
        <DefaultButton title={'Criar minha conta'} color={'#419ED7'} width={300} onPress={goToCriarConta}/>
        <DefaultButton title={'Esqueci minha senha'} color={'#B0CCDE'} width={300} onPress={goToRecuperarSenha}/>
      </View>
      
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
