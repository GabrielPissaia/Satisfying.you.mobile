import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import NovaConta from './src/screens/NovaConta';
import NovaPesquisa from './src/screens/NovaPesquisa';
import PaginaPrincipal from './src/screens/PaginaPrincipal';
import RecuperarSenha from './src/screens/RecuperarSenha';

const Stack = createStackNavigator()

const App =  () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="NovaConta" component={NovaConta} />
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
                <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
                <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} />
                <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;