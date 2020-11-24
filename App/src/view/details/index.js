import React, { useEffect, useState } from "react";
import { View, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { serviceUpdateAccountFavorites } from '../../services/LoginService'
import { theme } from '../core/theme';
import { Container, RequestButton, RequestButtonText } from "./styles";
import realmMotorista from '../../repository/RealMotorista';

const Details = (props) => {
  const { parkinglot } = props;
  const [localmotorista, setLocalmotorista] = useState();
  const [favorite, setFavorite] = useState();
  
  const staro = <Icon name="star-o" size={30} color="#ffd43b" />;
  const star = <Icon name="star" size={30} color="#ffd43b" />;
  const route = <Icon name="road" size={30} color="#fff" />;

  useEffect(() => {
    async function loadMotorista(){
      const motorista = realmMotorista.getMotorista()
      setLocalmotorista(motorista);
      if(localmotorista && localmotorista.vagasFavoritas && localmotorista.vagasFavoritas.find(el => el == parkinglot._id)){
        setFavorite(true);
      }else{
        setFavorite(false);
      }
    }
    loadMotorista();
  }, [props])

  const onUpdateProfilePressed = () => {
    if(isFavorite()){
       setFavorite(false);
       realmMotorista.updateFavorites(localmotorista, parkinglot._id, false)
     }else{
       setFavorite(true);
       realmMotorista.updateFavorites(localmotorista, parkinglot._id, true)
    }
    serviceUpdateAccountFavorites(localmotorista, returnMessageFavorite())
  }

  function returnMessageFavorite(){
    if(favorite)
       return 'Removido!'
    return 'Favoritado!'
  }

  function isFavorite(){
     return localmotorista && localmotorista.vagasFavoritas.find(el => el == parkinglot._id);
  }

  return (
    <Container>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
        <RequestButton style={{ width: '45%', backgroundColor: theme.colors.primary, height: 70 }} onPress={onUpdateProfilePressed}>
          { favorite?star:staro }
          <RequestButtonText>Favoritar</RequestButtonText>
        </RequestButton>
        <RequestButton style={{ width: '45%',  backgroundColor: theme.colors.primary, height: 70 }} 
        onPress={() => {
          Linking.openURL(`google.navigation:q=${parkinglot.latitude},${parkinglot.longitude}`)
        }}>
          {route}
          <RequestButtonText >Navegar</RequestButtonText>
        </RequestButton>
      </View>
    </Container>
  );
}

export default Details;