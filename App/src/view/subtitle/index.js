import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  TypeTitle,
  TypeDescription
} from "./styles";

const Subtitle = () => {
  return (
    <Container>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80%'}}>
        <TypeTitle>Legenda</TypeTitle>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon name="directions-car" size={30} color="red" />
          <TypeDescription>Vaga ocupada.</TypeDescription>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon name="directions-car" size={30} color="green" />
          <TypeDescription>Vaga disponível para estacionar.</TypeDescription>
        </View>
      </View>
    </Container>
  );
}

export default Subtitle;