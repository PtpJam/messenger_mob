import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components";


export const MainView = styled(View)`
  background-color: #222e3e;
  flex: 1;
`;

export const FormView = styled(View)`
  width: 100%;
  flex: 1;
  height: 20%;
  flex-direction: row;

`;

export const Input = styled(TextInput)`
  height: 32px;
  width: 67%;
  float: left;
  margin: 20px 20px 0px 0px;
  color: white;
  font-size: 16px;
`;

export const NextButton = styled(TouchableOpacity)`
  width: 20%;
  height: 20%;
  background-color: darkgray;
  align-items: center;
  padding: 10px;
`;
