import { ImageBackground, Text, View } from 'react-native';
import styled from 'styled-components';

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Row = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin: 40px 0;
  padding-left: 0;
`;

export const Title = styled(Text)`
  font-size: 30px;
  font-weight: 400;
  color: white;
`;
