import React, { memo, useEffect, useState, useRef, Fragment } from 'react';
import { View, Image,  Platform, PixelRatio } from 'react-native';
import styled, { css } from "styled-components/native";
import backImage from "../assets/back.png";
import Directions from "../directions";
import Details from "../details";
import MapView, { Marker } from 'react-native-maps';
import { ServiceGetParkingLotList } from "../../services/ServiceMaps"
import Search from "../components/Search";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../core/theme';
import Geocoder from "react-native-geocoding";
import showMessage from '../core/message';
import Subtitle from '../subtitle';
import { vagas } from './vagas'
navigator.geolocation = require('@react-native-community/geolocation');

Geocoder.init("AIzaSyCJAXdG35oEvZKGnl79517yTPEMMIDO6Cw");

function getPixelSize(pixels) {
    return Platform.select({
        ios: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels)
    });
}

const minhaLocalizacao =  {"latitude": -29.77322769165039, "latitudeDelta": 0.0045, "longitude": -51.14099884033203, "longitudeDelta": 0.0051, "title": "Onde eu estou!"};
const minharua = "R. José Bonifácio";

const ParkingLotScreen = ({navigation}) =>{ 
   
    const [region, setRegion] = useState(minhaLocalizacao);
    const [regionSearch, setRegionSearch] = useState(minhaLocalizacao);
    const [destination, setDestination] = useState(null);
    const [location, setLocation] = useState(minharua);
    const [parkinglot, setParkinglot] = useState(vagas);

    const mapRef = useRef(null);

    async function searchParkingLotList() {
      const data = await ServiceGetParkingLotList();
      setParkinglot(data)
    }

    // useEffect(() => {
    //   navigator.geolocation.getCurrentPosition(
    //       async ({ coords: { latitude, longitude } }) => {
    //           const response = await Geocoder.from({ latitude, longitude });
    //           const address = response.results[0].formatted_address;
    //           const location = address.substring(0, address.indexOf(","));
    //           const region = {
    //             latitude,
    //             longitude,
    //             latitudeDelta: 0.0045,
    //             longitudeDelta: 0.0031,
    //             title: 'Onde eu estou!'
    //           };
    //           console.log(location)
              
    //           console.log(region)

    //           setLocation(location);
    //           setRegion(region)
    //           setRegionSearch(region)
    //       }, //sucesso
    //       () => {}, //erro
    //       {
    //           timeout: 2000,
    //           enableHighAccuracy: true,
    //           maximumAge: 1000
    //       }
    //   );
    //   // searchParkingLotList();
    // }, []);

    const handleLocationSelected = (location) => {
        if(location.ocupado)
           showMessage('Vaga Ocupada!')

        const { latitude, longitude } = location;
        const destination = {
          latitude,
          longitude,
          title: "Vaga"
        }
        setDestination(destination);
    };

    const handleLocationDestinySelected = (data, { geometry }) => {
      const { location: { lat, lng }} = geometry;
      const region = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0245,
        longitudeDelta: 0.0231,
        title: 'Onde quero ir!'
      };
      setRegionSearch(region)
  };

    const handleBack = () => {
        setDestination(null);
    };

    const ListMarkers = () => {
      return (parkinglot && parkinglot.map((location, index) => {
        const { latitude, longitude, ocupado } = location;
        return (
          <Marker
              key={index}
              coordinate={{ latitude, longitude }}
              onPress={() => {
                handleLocationSelected(location)
              }}
          >
            <Icon name="directions-car" size={15} color={ocupado? "red" : "green"} />
          </Marker>)
        }))
    }

    var _duration = 0;
    return (
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            region={regionSearch}
            showsUserLocation
            loadingEnabled
            ref={mapRef}
          >
            <ListMarkers />
            {destination && (
              <Fragment>
                <Directions
                  origin={region}
                  destination={destination}
                  onReady={result => {
                    _duration = Math.floor(result.duration);
                    mapRef && mapRef.current.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: getPixelSize(60),
                        left: getPixelSize(60),
                        top: getPixelSize(60),
                        bottom: getPixelSize(360)
                      }
                    });
                  }}
                />  
                <Marker coordinate={region} anchor={{ x: 0, y: 0 }}>
                  <LocationBox>
                    <LocationTimeBox>
                      <LocationTimeText>{_duration}</LocationTimeText>
                      <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                    </LocationTimeBox>
                    <LocationText>{location}</LocationText>
                  </LocationBox>
                </Marker>
              </Fragment>
            )}
          </MapView>
          {destination ? (
            <Fragment>
              <Back onPress={handleBack}>
                <Image source={backImage} />
              </Back>
              <Details {...{parkinglot: parkinglot.find(el => el.latitude==destination.latitude && el.longitude==destination.longitude) }} />
            </Fragment>
          ) : (
            <Fragment>
              <NavBox>
                <Menu onPress={() => navigation.openDrawer()}>
                  <Icon name="menu" size={20} color="black" />
                </Menu>
                <Search handleLocationDestinySelected={handleLocationDestinySelected}/>
              </NavBox>
              <Subtitle {...{parkinglot:parkinglot, setParkinglot: setParkinglot}} />
            </Fragment>
          )}
        </View>
      );
};

export const LocationBox = styled.View`
  background: #fff;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  elevation: 1;
  border: 1px solid #ddd;
  border-radius: 3px;
  flex-direction: row;
  ${Platform.select({
    ios: css`
    margin-top: 20px;
    `,
    android: css`
    margin-top: 10px;
    margin-left: 10px;
    `
  })}
`;

export const LocationText = styled.Text`
  margin: 8px 10px;
  font-size: 14px;
  color: #333;
`;

export const LocationTimeBox = styled.View`
  background: ${theme.colors.primary};
  padding: 3px 8px;
`;

export const LocationTimeText = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

export const LocationTimeTextSmall = styled.Text`
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: '60px', android: '40px' })};
  left: 20px;
`;

export const NavBox = styled.View`
    position: absolute;
    ${Platform.select({
      ios: css`top: 60px;`,
      android: css`top: 50px;`
    })}
    flex: 1;
    flexDirection: row;
    width: 100%;
    justifyContent: center;
    paddingLeft: 20px;
`;

export const Menu = styled.TouchableOpacity`
    backgroundColor: #fff;
    width: 54px;
    height: 54px;
    shadowColor: #000,
    shadowOffset: { x: 0, y: 0 };
    borderWidth: 1px;
    borderColor: #DDD;
    display: flex;
    justifyContent: center;
    alignItems: center;
    borderWidth: 2px;
    borderRadius: 2px;
    borderBottomWidth: 0px;
    shadowOpacity: 1;
    shadowRadius: 3px;
    shadowOffset: { height: 0px, width: 0px };
    elevation: 12;
    bottom: 1px
`

export default ParkingLotScreen;
