import { ImageBackground, Text, View } from 'react-native';
import styled from 'styled-components';

export const MainContainer = styled(View)`
  position: absolute;
  flex: 1;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  justify-content: end;
  align-items: center;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Row = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;

export const Title = styled(Text)`
  font-size: 30px;
  font-weight: 400;
  color: white;
`;
