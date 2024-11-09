import {
  Image,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components';

export const StyledFormInput = styled(TextInput)`
  width: 100%;
  font-size: 22px;
  font-weight: 400;
  color: white;
`;

export const Row = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 54px;
`;

export const StyledBackgroundImage = styled(ImageBackground)`
  padding: 0 40px;
  height: 58px;
  align-items: center;
`;
export const StyledInactiveInput = styled(View)`
  width: 100%;
  padding: 0 40px;
  height: 58px;
`;

export const StyledBottomImage = styled(Image)`
  width: 300px;
`;

export const InputIcon = styled(Image)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;
