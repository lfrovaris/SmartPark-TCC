import React, { memo, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import realmMotorista from '../../repository/RealMotorista';
import { theme } from '../core/theme';
import ParkingLotScreen from './ParkingLotScreen';
import ParkingLotScreenFavorites from './ParkingLotScreenFavorites';

const DrawerWithLogoutButton = ({props, navigation, motorista}) => (
  <ScrollView contentContainerStyle={{flex: 1,  flexDirection: 'column', justifyContent: 'space-between' }}>
      <View>
        <DrawerItemList {...props} />
      </View>
      <DrawerItem label={() => <View style={{ flexDirection: 'row', width: 500}}>
          <Icon name="power-off" size={21} color="#000"  />
          <Text style={{ color: theme.colors.primary, fontSize: 21, position: 'relative', top: -5, right: -35  }}>Sair</Text>
        </View>}
        onPress={() => {
          realmMotorista.delete(motorista); 
          props.navigation.closeDrawer();
          navigation.navigate('HomeScreen');
        }}
      />
    </ScrollView>
);

const Drawer = createDrawerNavigator();

const MainScreen = ({navigation}) => {
  const [motorista, setMotorista] = useState(realmMotorista.getMotorista())

  // useEffect(() => {
  //   async function loadMotorista(){
  //     const _motorista = realmMotorista.getMotorista()
  //     setMotorista(_motorista);
  //   }
  //   loadMotorista();
  // }, [])

  const vagas = (props) => (<ParkingLotScreen {...props} />);
  
  const minhasvagas = (props) => (<ParkingLotScreenFavorites {...props} />);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={motorista?"ParkingLotScreen":navigation.navigate('HomeScreen')} 
        drawerContentOptions={{
          labelStyle: {
            fontSize: 21,
            color: theme.colors.primary
          }
        }}
        drawerContent={(props) => <DrawerWithLogoutButton {...{props: props, navigation: navigation, motorista: motorista }}/>}
        
        >
        <Drawer.Screen 
          name="User"
          component={ProfileScreen}
          options={{ 
            drawerLabel: motorista.name,
            drawerIcon: ({ focused, size }) => (
              <Icon name="user" size={size} color="#000"  />
            )
           }}
        />
        <Drawer.Screen 
          name="ParkingLotScreen" 
          component={vagas} 
          options={{ 
            drawerLabel: 'Procurar Vagas',
            drawerIcon: ({ focused, size }) => (
              <Icon name="crosshairs" size={size} color="#000"  />
            )
          }}
        />
        <Drawer.Screen 
          name="Favorites" 
          component={minhasvagas} 
          options={{ 
            drawerLabel: 'Favoritos',
            drawerIcon: ({ focused, size }) => (
              <Icon name="star" size={size} color="#000"  />
            ) 
          }}
        /> 
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  }
});

export default memo(MainScreen);