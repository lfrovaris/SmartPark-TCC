import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../helpers/utils';
import { serviceUpdateAccount } from '../../services/LoginService';
import realmMotorista from '../../repository/RealMotorista';

const ProfileScreen = ({ navigation }) => {
  const motorista = realmMotorista.getMotorista();
  const [name, setName] = useState({ value: motorista.name, error: '' });
  const [email, setEmail] = useState({ value: motorista.email, error: '' });
  const [password, setPassword] = useState({ value: motorista.password, error: '' });

  const onUpdateProfilePressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const localMotorista = realmMotorista.getMotorista();

    const motorista = {
      _id: localMotorista._id,
      name: name.value,
      email: email.value,
      password: password.value,
      vagasFavoritas: localMotorista.vagasFavoritas
    };
    serviceUpdateAccount(motorista, navigation)
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('ParkingLotScreen')} />
      <Header>Editar conta</Header>
      <TextInput
        label="Nome"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="E-mail"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={onUpdateProfilePressed} style={styles.button}>
        Salvar
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default ProfileScreen;
