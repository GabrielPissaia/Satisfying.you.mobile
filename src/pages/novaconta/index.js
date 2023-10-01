import { useState } from 'react';
import { View } from 'react-native';
import { DefaultButton } from '../../components/DefaultButton';
import DefaultInput from '../../components/DefaultInput';
import { Navbar } from '../../components/Navbar';
import styles from './styles';

export default function NovaConta() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleEmailChange = (text) => {
    setEmail(text);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    setEmailError(regex.test(text) ? "" : "Email inválido")
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
    setPasswordError(text !== repeatPassword ? "O campo repetir senha difere da senha" : "")
  }

  const handleRepeatPasswordChange= (text) => {
    setRepeatPassword(text)
    setPasswordError(password !== text ? "O campo repetir senha difere da senha" : "")
  }

  return (
    <View style={styles.container}>
      <Navbar title={'Nova conta'} ></Navbar>
      <DefaultInput onChangeText={handleEmailChange} placeholder={'Digite seu email'} title={'E-mail'} size={300} error={emailError} borderRadius={8}/>
      <DefaultInput onChangeText={handlePasswordChange} secure={true} placeholder={'Digite sua senha'} title={'Senha'} size={300} borderRadius={8}/>
      <DefaultInput onChangeText={handleRepeatPasswordChange} secure={true} placeholder={'Repita sua senha'} title={'Repetir senha'} size={300} error={passwordError} borderRadius={8}/>
    
      <DefaultButton title={'Cadastrar'} color={'#37BD6D'} width={300} disabled={Boolean(emailError) || Boolean(passwordError)}/>
      
    </View>
  );
}
