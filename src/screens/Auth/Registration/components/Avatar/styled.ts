import { Image, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const ButtonContainer = styled(TouchableOpacity)`
  align-items: center;
  padding: 40px 0;
`;

export const ImagePicker = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;
