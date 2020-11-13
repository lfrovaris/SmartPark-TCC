import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import realmMotorista from '../repository/RealMotorista';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  MainScreen,
} from './screens';

const motorista = realmMotorista.getMotorista();

const Router = createStackNavigator(
  {
    MainScreen,
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
  },
  {
    initialRouteName: motorista && motorista.name?'MainScreen':'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
