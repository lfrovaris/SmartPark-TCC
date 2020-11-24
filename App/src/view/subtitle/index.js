import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  TypeTitle,
  TypeDescription
} from "./styles";

const Subtitle = (props) => {
  const { parkinglot, setParkinglot } = props;
  console.log(parkinglot)
  return (
    <Container>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80%'}}>
        <TypeTitle>Legenda</TypeTitle>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon name="directions-car" size={30} color="red" />
          <TypeDescription>Vaga ocupada.</TypeDescription>
          <View style={{  backgroundColor: 'red'}}>
          </View>
          <Icon onPress={() => {
            setParkinglot(parkinglot.map( item => {
              if(item.macAddress === '1C-35-5B-5F-4A-D8'){
                return {...item, ocupado: !item.ocupado}
              }
              return item;
           }))
          }} style={{  backgroundColor: 'red', opacity: 0}} name="directions-car" size={30} color="blue" />
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon name="directions-car" size={30} color="green" />
          <TypeDescription>Vaga liberada.</TypeDescription>
        </View>
      </View>
    </Container>
  );
}

export default Subtitle;