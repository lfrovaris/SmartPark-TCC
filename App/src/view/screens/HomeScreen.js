import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';


const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Smart Park</Header>

    <Paragraph>
      A maneira mais fácil de encontrar uma vaga de estacionamento.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Registre-se
    </Button>
  </Background>
);

export default HomeScreen;
