import { Text, ImageBackground, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

export const ButtonContainer = styled(TouchableHighlight)`
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  color: white;
  font-size: 25px;
  font-weight: 400;
`;

export const StyledImage = styled(ImageBackground)`
  width: 200px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;
