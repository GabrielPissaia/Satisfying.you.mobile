import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Divider } from 'react-native-paper';
import { UseSelector } from 'react-redux/es/hooks/useSelector';


const Drawer = (props) => {
  const email = UseSelector((state) => state.login.email)

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem    
         labelStyle={{color: 'white' }}
         label={email}/>
      <Divider />
      <DrawerItemList
       {...props} />
      <DrawerItem
      labelStyle={{color: 'white' }}
      label="Sair" onPress={() => { props.navigation.popToTop() }} 
     />
    </DrawerContentScrollView>
  );
}


export default Drawer;