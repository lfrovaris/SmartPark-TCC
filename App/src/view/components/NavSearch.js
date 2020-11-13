import React from 'react';
import Search from "./Search";
import { View, Text, Button,  Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled, { css } from "styled-components/native";


const NavSearch = ({ onLocationSelected, navigation }) => {
    console.log(onLocationSelected);
    return (<NavBox>
              <Menu>
                <Icon name="menu" size={20} color="black" onPress={() => navigation.openDrawer()}/>
              </Menu>
              <Search  onLocationSelected={() => { onLocationSelected() }} />
            </NavBox>);
}

export default NavSearch;


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


export const Menu = styled.View`
    backgroundColor: #fff;
    width: 54;
    height: 54;
    shadowColor: #000,
    shadowOffset: { x: 0, y: 0 };
    borderWidth: 1;
    borderColor: #DDD;
    display: flex;
    justifyContent: center;
    alignItems: center;
    borderWidth: 2;
    borderRadius: 2;
    borderBottomWidth: 0;
    shadowOpacity: 0.5;
    shadowRadius: 3;
    shadowOffset: { height: 0, width: 0 };
    elevation: 12;
    bottom: 1
`