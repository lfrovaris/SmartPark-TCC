import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 0;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  elevation: 3;
  border: 1px solid #ddd;
  align-items: center;
  padding: 25px 20px 20px; 
`;

export const TypeTitle = styled.Text`
  font-size: 25px;
  color: #222;
  margin-bottom: 20px
`;

export const TypeDescription = styled.Text`
  color: #666;
  font-size: 19px;
  margin-top: 1px
`;

export const TypeImage = styled.Image`
  height: 80px;
  margin: 10px 0;
`;

export const RequestButton = styled.TouchableOpacity`
  background: #222;
  justify-content: center;
  align-items: center;
  height: 44px;
  align-self: stretch;
  margin-top: 10px;
`;

export const RequestButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
